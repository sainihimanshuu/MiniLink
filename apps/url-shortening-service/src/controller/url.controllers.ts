import asyncHandler from "@repo/utils/asyncHandler";
import { customAlphabet } from "nanoid";
import {
  getPrismaClient,
  getCacheClient,
  getQueueClient,
} from "../connections.js";
import { Request } from "express";
import geoip from "geoip-lite";
import { UAParser } from "ua-parser-js";

interface AuthRequest extends Request {
  email: string;
}

type Location = {
  city: string;
  country: string;
};

const nanoid = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  8
);
const BASE_URL = "http://MiniLink.link/";

const genereateShortUrl = () => {
  const code = nanoid();
  const shortUrl = BASE_URL + code;
  return shortUrl;
};

const getClients = () => {
  const prisma = getPrismaClient();
  const cacheClient = getCacheClient();
  const queueClient = getQueueClient();

  return { prisma, cacheClient, queueClient };
};

const shortenUrl = asyncHandler(async (req, res, _) => {
  const { prisma } = getClients();
  const longUrl = req.body.longUrl;
  let shortUrl;

  while (true) {
    shortUrl = genereateShortUrl();
    const check = await prisma.shortUrl.findUnique({
      where: {
        shortUrl: shortUrl,
      },
    });
    if (check) {
      break;
    }
  }

  await prisma.userUrls.upsert({
    where: { email: (req as AuthRequest).email },
    update: {
      shortUrls: {
        create: {
          shortUrl: shortUrl,
          longUrl: longUrl,
        },
      },
    },
    create: {
      email: (req as AuthRequest).email,
      shortUrls: {
        create: {
          shortUrl: shortUrl,
          longUrl: longUrl,
        },
      },
    },
  });

  res
    .status(201)
    .json({ message: "short url created successfully", shortUrl: shortUrl });
  return;
});

const redirect = asyncHandler(async (req: Request, res, _) => {
  const { prisma, cacheClient, queueClient } = getClients();
  const { shortUrl } = req.params;
  if (!shortUrl) return;
  const { device } = UAParser(req.get("user-agent"));
  const refererHeader = req.get("Referer");
  const ip = req.ip;

  let urlInfo;
  const inCache = await cacheClient.get(shortUrl);
  if (inCache) {
    urlInfo = JSON.parse(inCache);
  } else {
    const urlEntry = await prisma.shortUrl.findUnique({
      where: {
        shortUrl: shortUrl,
      },
    });
    if (!urlEntry) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    const longUrl = urlEntry?.longUrl;
    const ownerMail = urlEntry?.ownerMail;
    urlInfo = {
      longUrl,
      ownerMail,
    };
    await cacheClient.set(shortUrl!, JSON.stringify(urlInfo));
  }

  const deviceType = device.type === undefined ? "desktop" : device.type;
  let location: Location = { city: "", country: "" };
  if (ip) {
    const lookup = geoip.lookup(ip);
    if (lookup) {
      location.city = lookup.city;
      location.country = lookup.country;
    }
  }
  let referer = "";
  if (refererHeader) {
    const url = new URL(refererHeader);
    const parts = url.hostname.split(".");
    parts.pop();
    referer = parts.join(".");
  }

  const clickInfo = {
    jobType: "click",
    shortUrl: shortUrl,
    urlOwnerMail: urlInfo.ownerMail,
    deviceType: deviceType,
    location: location,
    referer: referer,
    clickDate: new Date(),
  };

  await queueClient.lPush("messageQueue", JSON.stringify(clickInfo));

  res.redirect(urlInfo.longUrl);
  return;
});

const revokeUrl = asyncHandler(async (req, res, _) => {
  const { prisma, cacheClient, queueClient } = getClients();
  const userMail = (req as AuthRequest).email;
  const { shortUrlToDelete } = req.body;

  const shortUrlDetails = await prisma.shortUrl.findUnique({
    where: {
      shortUrl: shortUrlToDelete,
    },
  });
  if (!shortUrlDetails) {
    res.status(404).json({ message: "short url does not exits" });
    return;
  }
  if (shortUrlDetails.ownerMail !== userMail) {
    res.status(403).json({ message: "unauthorized to delete this url" });
    return;
  }

  await prisma.shortUrl.delete({
    where: {
      shortUrl: shortUrlToDelete,
    },
  });

  await cacheClient.del(shortUrlToDelete);

  const revokeInfo = {
    jobType: "revokeUrl",
    shortUrl: shortUrlToDelete,
  };

  await queueClient.lPush("messageQueue", JSON.stringify(revokeInfo));

  res.status(200).json({ message: "deleted successfully" });
  return;
});

export { shortenUrl, redirect, revokeUrl };

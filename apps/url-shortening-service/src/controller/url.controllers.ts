import asyncHandler from "@repo/utils/src/asyncHandler";
import { customAlphabet } from "nanoid";
import { prisma, client } from "../index";
import { Request } from "express";

interface AuthRequest extends Request {
  email: string;
}

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

const shortenUrl = asyncHandler(async (req, res, _) => {
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

const redirect = asyncHandler(async (req, res, _) => {
  const { shortUrl } = req.params;

  let longUrl: string | null | undefined = await client.get(shortUrl);
  if (!longUrl) {
    const urlEntry = await prisma.shortUrl.findUnique({
      where: {
        shortUrl: shortUrl,
      },
    });
    if (!urlEntry) {
      res.status(404).json({ message: "Not found" });
      return;
    }
    longUrl = urlEntry?.longUrl;
    await client.set(shortUrl!, longUrl!);
  }

  res.redirect(longUrl);
  return;
});

const revokeUrl = asyncHandler(async (req, res, _) => {
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

  await client.del(shortUrlToDelete);

  res.status(200).json({ message: "deleted successfully" });
  return;
});

export { shortenUrl, redirect, revokeUrl };

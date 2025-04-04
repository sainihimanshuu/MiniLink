import { getPrismaClient, getCacheClient } from "../connections.js";
import asyncHandler from "@repo/utils/asyncHandler";
import { Request, Response } from "express";

interface AuthRequest extends Request {
  email: string;
}

const getClients = () => {
  const prisma = getPrismaClient();
  console.log("before getCache in analytics controller");
  const cacheClient = getCacheClient();

  return { prisma, cacheClient };
};

const checkAuthorization = async (
  userMail: string,
  shortUrl: string,
  res: Response
) => {
  const { prisma } = getClients();
  const exist = await prisma.shortUrl.findUnique({
    where: {
      shortUrl: shortUrl,
    },
  });
  if (!exist) {
    res.status(404).json({ message: "no such short url exist" });
    return false;
  }
  if (exist.ownerMail !== userMail) {
    res.status(403).json({ message: "unauthorized" });
    return false;
  }
  return true;
};

const totalClicks = asyncHandler(async (req: Request, res: Response) => {
  const { prisma, cacheClient } = getClients();
  const userMail = (req as AuthRequest).email;
  const { shortUrl } = req.params;
  if (!shortUrl) return;

  const inCache = await cacheClient.get(`${shortUrl}:totalClicks`);
  if (inCache) {
    await cacheClient.sAdd("recent", shortUrl);
    res.status(200).json({
      message: "total clicks fetched successfully",
      totalClicks: parseInt(inCache),
    });
    return;
  }

  const isAuthorized = await checkAuthorization(userMail, shortUrl, res);
  if (!isAuthorized) {
    return;
  }

  const clicks = await prisma.clickInfo.findMany({
    where: {
      shortUrl: shortUrl,
    },
  });

  const noOfClicks = clicks.length;
  cacheClient.set(`${shortUrl}:totalClicks`, noOfClicks, {
    EX: 60 * 60 * 24,
  });
  cacheClient.sAdd("recent", shortUrl);

  res.status(200).json({
    message: "total clicks fetched successfully",
    totalClicks: noOfClicks,
  });
  return;
});

const clicksByCountry = asyncHandler(async (req: Request, res: Response) => {
  const { prisma, cacheClient } = getClients();
  const { shortUrl } = req.params;
  if (!shortUrl) return;
  const userMail = (req as AuthRequest).email;

  const inCache = await cacheClient.get(`${shortUrl}:clicksByCountry`);
  if (inCache) {
    cacheClient.sAdd("recent", shortUrl);
    res.status(200).json({
      message: "total clicks fetched successfully",
      clicksByCountry: JSON.parse(inCache),
    });
    return;
  }

  const isAuthorized = await checkAuthorization(userMail, shortUrl, res);
  if (!isAuthorized) {
    return;
  }

  const clicksByCountry = await prisma.clickInfo.groupBy({
    by: ["country"],
    where: { shortUrl: shortUrl },
    _count: true,
  });

  cacheClient.set(
    `${shortUrl}:clicksByCountry`,
    JSON.stringify(clicksByCountry),
    {
      EX: 60 * 60 * 24,
    }
  );
  cacheClient.sAdd("recent", shortUrl);

  res.status(200).json({
    message: "clicks by country fetched successfully",
    clicksByCountry: clicksByCountry,
  });
  return;
});

const clicksByReferer = asyncHandler(async (req: Request, res: Response) => {
  const { prisma, cacheClient } = getClients();
  const { shortUrl } = req.params;
  if (!shortUrl) return;
  const userMail = (req as AuthRequest).email;

  const inCache = await cacheClient.get(`${shortUrl}:clicksByReferer`);
  if (inCache) {
    cacheClient.sAdd("recent", shortUrl);
    res.status(200).json({
      message: "clicks by referer fetched successfully",
      clicksByReferer: JSON.parse(inCache),
    });
    return;
  }

  const isAuthorized = await checkAuthorization(userMail, shortUrl, res);
  if (!isAuthorized) {
    return;
  }

  const clicksByReferer = await prisma.clickInfo.groupBy({
    by: ["referer"],
    where: {
      shortUrl: shortUrl,
    },
    _count: true,
  });

  cacheClient.set(
    `${shortUrl}:clicksByReferer`,
    JSON.stringify(clicksByReferer),
    {
      EX: 60 * 60 * 24,
    }
  );
  cacheClient.sAdd("recent", shortUrl);

  res.status(200).json({
    message: "clicks by referer fetched successfully",
    clicksByReferer: clicksByReferer,
  });
  return;
});

const clicksByDeviceType = asyncHandler(async (req: Request, res: Response) => {
  const { prisma, cacheClient } = getClients();
  const { shortUrl } = req.params;
  if (!shortUrl) return;
  const userMail = (req as AuthRequest).email;

  const inCache = await cacheClient.get(`${shortUrl}:clicksByDeviceType`);
  if (inCache) {
    cacheClient.sAdd("recent", shortUrl);
    res.status(200).json({
      message: "clicks by device type successfully",
      clicksByDeviceType: JSON.parse(inCache),
    });
    return;
  }

  const isAuthorized = await checkAuthorization(userMail, shortUrl, res);
  if (!isAuthorized) {
    return;
  }

  const clicksByDeviceType = await prisma.clickInfo.groupBy({
    by: ["deviceType"],
    where: {
      shortUrl: shortUrl,
    },
    _count: true,
  });

  cacheClient.set(
    `${shortUrl}:clicksByDeviceType`,
    JSON.stringify(clicksByDeviceType),
    {
      EX: 60 * 60 * 24,
    }
  );
  cacheClient.sAdd("recent", shortUrl);

  res.status(200).json({
    message: "clicks by device type fetched successfully",
    clicksByDeviceType: clicksByDeviceType,
  });
  return;
});

export { totalClicks, clicksByCountry, clicksByReferer, clicksByDeviceType };

import { RedisClientType } from "redis";
import { PrismaClient } from "@repo/db-analytics";
import {
  getQueueClient,
  getCacheClient,
  getPrismaClient,
} from "./connections.js";

interface BaseJobData {
  jobType: "click" | "revokeUrl";
  shortUrl: string;
}

interface ClickJobData extends BaseJobData {
  jobType: "click";
  urlOwnerMail: string;
  deviceType: string;
  location: {
    city: string;
    country: string;
  };
  referer: string;
  clickDate: Date;
}

interface RevokeJobData extends BaseJobData {
  jobType: "revokeUrl";
}

const worker = async () => {
  const prisma = getPrismaClient();
  const queueClient = getQueueClient();
  const cacheClient = getCacheClient();

  try {
    while (true) {
      if (!queueClient) return;
      const job = await queueClient.brPop("messageQueue", 0);
      if (!job) {
        return;
      }
      const parsedJob = JSON.parse(job.element);
      if (parsedJob.jobType === "click") {
        await newClickToDatabase(parsedJob, prisma);
      } else if (parsedJob.jobType === "revokeUrl") {
        await revokeUrl(parsedJob, prisma, cacheClient);
      }
    }
  } catch (err) {
    console.log("error inside url-to-analytics-message-queue worker", err);
    throw err;
  }
};

const newClickToDatabase = async (job: ClickJobData, prisma: PrismaClient) => {
  try {
    await prisma.shortUrl.upsert({
      where: {
        shortUrl: job.shortUrl,
      },
      update: {
        clickInfo: {
          create: {
            deviceType: job.deviceType,
            city: job.location.city,
            country: job.location.country,
            referer: job.referer,
            clickDate: job.clickDate,
          },
        },
      },
      create: {
        shortUrl: job.shortUrl,
        ownerMail: job.urlOwnerMail,
        clickInfo: {
          create: {
            deviceType: job.deviceType,
            city: job.location.city,
            country: job.location.country,
            referer: job.referer,
            clickDate: job.clickDate,
          },
        },
      },
    });
    console.log(`Processed ${job.jobType} job for ${job.shortUrl}`);
  } catch (err) {
    console.log(
      "error in newClickToDatabase in url-to-analytics-message-queue-service"
    );
    throw err;
  }
};

const revokeUrl = async (
  job: RevokeJobData,
  prisma: PrismaClient,
  cacheClient: RedisClientType
) => {
  //delete the short url from the analytics db and cache
  try {
    await prisma.shortUrl.delete({
      where: {
        shortUrl: job.shortUrl,
      },
    });

    // four types of cache to remove
    let pipeline = cacheClient.multi();
    pipeline.del(`${job.shortUrl}:totalClicks`);
    pipeline.del(`${job.shortUrl}:clicksByCountry`);
    pipeline.del(`${job.shortUrl}:clicksByReferer`);
    pipeline.del(`${job.shortUrl}:clicksByDeviceType`);
    await pipeline.exec();
    console.log(`Processed ${job.jobType} job for ${job.shortUrl}`);
  } catch (err) {
    console.log("error in revokeUrl in url-to-analytics-message-queue-service");
    throw err;
  }
};

export default worker;

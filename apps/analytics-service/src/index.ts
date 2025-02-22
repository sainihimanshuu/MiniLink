import express from "express";
import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";
import { Server } from "http";
import cookieParser from "cookie-parser";
import analyticsRouter from "./routes/analytics.routes";
import refereshCache from "./workers/refreshCache.worker";

const app = express();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use("api/analytics", analyticsRouter);

let server: Server;
let cacheClient: ReturnType<typeof createClient>;
let queueClient: ReturnType<typeof createClient>;
let refereshCacheInterval: NodeJS.Timeout;

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    cacheClient = createClient();
    cacheClient.on("error", (err) => {
      console.log("Redis cache-client error in analytics-service", err);
    });
    await cacheClient.connect();
    server = app.listen(8082, () => {
      console.log("analytics-service listening on 8082");
    });
    queueClient = createClient();
    queueClient.on("error", (err) =>
      console.log("Redis queue client error in url-shortening-service", err)
    );
    await queueClient.connect();
    refereshCacheInterval = refereshCache();
  } catch (error) {
    console.log(`Prism/redis connection error ${error}`);
  }
};

const exitHandler = async () => {
  try {
    if (server) {
      await new Promise((resolve) => {
        if (server) {
          server.close(resolve);
        }
      });
    }
    await prisma.$disconnect();
    if (queueClient) {
      await queueClient.disconnect();
    }
    if (cacheClient) {
      await cacheClient.disconnect();
    }
    clearInterval(refereshCacheInterval);
  } catch (err) {
    console.error("error in exit handler of analytics-service", err);
  }
};

const uncaughtErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler()
    .then(() => process.exit(1))
    .catch((err) => {
      console.error(
        "error while hadling process errors in analytics-service",
        err
      );
      process.exit(1);
    });
};

process.on("uncaughtException", uncaughtErrorHandler);
process.on("unhandledRejection", uncaughtErrorHandler);
process.on("SIGTERM", uncaughtErrorHandler);
process.on("SIGINT", uncaughtErrorHandler);

(async () => await connectToDatabase())();

export { prisma, cacheClient, queueClient };

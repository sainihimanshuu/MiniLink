import express from "express";
import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";
import { Server } from "http";
import cookieParser from "cookie-parser";
import analyticsRouter from "./routes/analytics.routes";

const app = express();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use("api/analytics", analyticsRouter);

let server: Server;
let cacheClient: ReturnType<typeof createClient>;
let queueClient: ReturnType<typeof createClient>;

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
  } catch (error) {
    console.log(`Prism/redis connection error ${error}`);
  }
};

const exitHandler = () => {
  if (server) {
    server.close(async () => {
      console.log("analytics service is shutting down");
      await prisma.$disconnect();
      await cacheClient.disconnect();
      await queueClient.disconnect();
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const uncaughtErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler();
};

process.on("uncaughtException", uncaughtErrorHandler);
process.on("unhandledRejection", uncaughtErrorHandler);
process.on("SIGTERM", uncaughtErrorHandler);
process.on("SIGINT", uncaughtErrorHandler);

connectToDatabase();

export { prisma, cacheClient, queueClient };

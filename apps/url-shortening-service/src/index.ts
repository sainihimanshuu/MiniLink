import express from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { Server } from "http";
import urlRouter from "./routes/url.routes";
import { createClient } from "redis";

const app = express();
app.set("trust proxy", true);
const prisma = new PrismaClient();

app.use(cookieParser());
app.use("/api/url", urlRouter);

let server: Server | null = null;
let cacheClient: ReturnType<typeof createClient> | null = null;
let queueClient: ReturnType<typeof createClient> | null = null;

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    cacheClient = createClient();
    cacheClient.on("error", (err) =>
      console.log("Redis cache client error in url-shortening-service", err)
    );
    await cacheClient.connect();
    queueClient = createClient();
    queueClient.on("error", (err) =>
      console.log("Redis queue client error in url-shortening-service", err)
    );
    await queueClient.connect();
    server = app.listen(8081, () => {
      console.log("url-shortening-service listening on 8081");
    });
  } catch (error) {
    console.log(`Prisma/redis connection error ${error}`);
    process.exit(1);
  }
};

const exitHandler = async () => {
  console.log("url-shortening-service service is shutting down");
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
  } catch (err) {
    console.error("error in exit handler of url-shortening-service", err);
  }
};

const uncaughtErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler()
    .then(() => process.exit(1))
    .catch((err) => {
      console.error(
        "error while hadling process errors in url-shortening-service",
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

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

let server: Server;
let cacheClient: ReturnType<typeof createClient>;
let queueClient: ReturnType<typeof createClient>;

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
    console.log(`Prisma connection error ${error}`);
  }
};

const exitHandler = () => {
  if (server) {
    server.close(async () => {
      console.log("authentication service is shutting down");
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

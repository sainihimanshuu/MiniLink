import express from "express";
import cookieParser from "cookie-parser";
import { PrismaClient } from "@prisma/client";
import { Server } from "http";
import urlRouter from "./routes/url.routes";
import { createClient } from "redis";

const app = express();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use("/api/url", urlRouter);

let server: Server;
let client: ReturnType<typeof createClient>;

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    client = createClient();
    client.on("error", (err) =>
      console.log("Redis client error in url-shortening-service", err)
    );
    await client.connect();
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
      await client.disconnect();
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

export { prisma, client };

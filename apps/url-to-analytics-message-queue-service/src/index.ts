import { createClient } from "redis";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
let cacheClient: ReturnType<typeof createClient> | null = null;
let queueClient: ReturnType<typeof createClient> | null = null;

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    queueClient = createClient();
    queueClient.on("error", (error) => {
      console.log(
        "Redis queue client error in url-to-analytics-message-queue-service",
        error
      );
    });
    await queueClient.connect();
    cacheClient = createClient();
    cacheClient.on("error", (error) => {
      console.log(
        "Redis cache client error in url-to-analytics-message-queue-service",
        error
      );
    });
    await cacheClient.connect();
  } catch (error) {
    console.log("Prima/redis connection error", error);
  }
};

const exitHandler = async () => {
  console.log("url-to-analytics-message-queue-service is shutting down");
  await prisma.$disconnect();
  if (queueClient) {
    await queueClient.disconnect();
  }
  if (cacheClient) {
    await cacheClient.disconnect();
  }
  process.exit(1);
};

const uncaughtErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler().catch((err) =>
    console.error(
      "error in url-to-analytics-message-queue-service exit handler",
      err
    )
  );
};

process.on("uncaughtException", uncaughtErrorHandler);
process.on("unhandledRejection", uncaughtErrorHandler);
process.on("SIGTERM", uncaughtErrorHandler);
process.on("SIGINT", uncaughtErrorHandler);

(async () => await connectToDatabase())();

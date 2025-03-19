import { PrismaClient } from "@repo/db-analytics";
import { createClient, RedisClientType } from "redis";

let prisma = new PrismaClient();
let queueClient: RedisClientType | null = null;
let cacheClient: RedisClientType | null = null;

const initializeConnections = async () => {
  try {
    await prisma.$connect();
    queueClient = createClient({ url: process.env.QUEUE_CLIENT });
    queueClient.on("error", (error) => {
      console.log("Redis queue client error in analytics", error);
    });
    await queueClient.connect();
    cacheClient = createClient({ url: process.env.CACHE_CLIENT });
    cacheClient.on("error", (error) => {
      console.log("Redis cache client error in analytics", error);
    });
    await cacheClient.connect();
  } catch (error) {
    console.log("Prisma/redis connection error inside analytics");
    throw error;
  }
};

const getPrismaClient: any = () => {
  if (!prisma) {
    throw new Error("getPrismaClient: Run initializeConnections first");
  }
  return prisma;
};

const getQueueClient = () => {
  if (!queueClient) {
    throw new Error("getQueueClient: Run initializeConnections first");
  }
  return queueClient;
};

const getCacheClient = () => {
  if (!cacheClient) {
    throw new Error("getCacheClient: Run initializeConnections first");
  }
  return cacheClient;
};

const cleanupConnection = async () => {
  if (prisma) {
    await prisma.$disconnect();
  }
  if (queueClient) {
    await queueClient.quit();
  }
  if (cacheClient) {
    await cacheClient.quit();
  }
};

export {
  initializeConnections,
  getCacheClient,
  getPrismaClient,
  getQueueClient,
  cleanupConnection,
};

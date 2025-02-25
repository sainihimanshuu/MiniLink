import { PrismaClient } from "@prisma/client";
import { createClient, RedisClientType } from "redis";

let prisma = new PrismaClient();
let queueClient: RedisClientType | null = null;
let cacheClient: RedisClientType | null = null;

const initializeConnections = async () => {
  try {
    await prisma.$connect();
    queueClient = createClient({ url: process.env.QUEUE_CLIENT });
    queueClient.on("error", (error) => {
      console.log("Redis queue client error in url-shortening-service", error);
    });
    await queueClient.connect();
    cacheClient = createClient({ url: process.env.CACHE_CLIENT });
    cacheClient.on("error", (error) => {
      console.log("Redis cache client error in url-shortening-service", error);
    });
    await cacheClient.connect();
  } catch (error) {
    console.log("Prisma/redis connection error inside url-shortening-service");
    throw error;
  }
};

const getPrismaClient = () => {
  if (!prisma) {
    throw new Error("Run initializeConnections first");
  }
  return prisma;
};

const getQueueClient = () => {
  if (!queueClient) {
    throw new Error("Run initializeConnections first");
  }
  return queueClient;
};

const getCacheClient = () => {
  if (!cacheClient) {
    throw new Error("Run initializeConnections first");
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

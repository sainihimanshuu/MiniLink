import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();

const initializeConnections = async () => {
  try {
    await prisma.$connect();
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

const cleanupConnection = async () => {
  if (prisma) {
    await prisma.$disconnect();
  }
};

export { initializeConnections, getPrismaClient, cleanupConnection };

import express from "express";
import dotenv from "dotenv";
import authenticationRouter from "./routes/authentication.routes";
import { PrismaClient } from "@prisma/client";
import { Server } from "http";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const prisma = new PrismaClient();

app.use(cookieParser());
app.use("/api/authentication", authenticationRouter);

let server: Server;

const connectToDatabase = async () => {
  try {
    await prisma.$connect();
    server = app.listen(8083, () => {
      console.log("authentication-service listening on 8083");
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

export { prisma };

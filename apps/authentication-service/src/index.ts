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

let server: Server | null = null;

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

const exitHandler = async () => {
  try {
    if (server) {
      await new Promise((resolve) => {
        if (server) {
          server.close(resolve);
        }
      });
    }
  } catch (err) {
    console.error("error in exit handler of authentication-service", err);
  }
};

const uncaughtErrorHandler = (error: Error) => {
  console.error(error);
  exitHandler()
    .then(() => process.exit(1))
    .catch((err) => {
      console.error(
        "error while hadling process errors in authentication-service",
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

export { prisma };

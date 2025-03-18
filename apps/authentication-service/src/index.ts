import express from "express";
import dotenv from "dotenv";
import authenticationRouter from "./routes/authentication.routes.js";
import { initializeConnections, cleanupConnection } from "./connections.js";
import { Server } from "http";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

app.use(cookieParser());
app.use("/api/authentication", authenticationRouter);

let server: Server | null = null;
let isShutdownRunning = false;

const startServer = async () => {
  try {
    await initializeConnections();
    server = app.listen(8083, () => {
      console.log("authentication-service listening on 8083");
    });
  } catch (error) {
    console.log(`Prisma connection error ${error}`);
  }
};

const shutdown = (error?: Error) => {
  if (isShutdownRunning) return;
  isShutdownRunning = true;
  if (error) {
    console.error("Fatal error:", error);
  } else {
    console.log("shutting down authentication-service");
  }
  if (server) {
    server.close();
  }
  cleanupConnection()
    .catch((err) => {
      console.error("Error during cleanup inside authentication-service:", err);
      process.exit(1);
    })
    .finally(() => process.exit(error ? 1 : 0));
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

startServer();

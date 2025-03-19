import express from "express";
import { Server } from "http";
import cookieParser from "cookie-parser";
import analyticsRouter from "./routes/analytics.routes.js";
import refereshCache from "./workers/refreshCache.worker.js";
import { initializeConnections, cleanupConnection } from "./connections.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cookieParser());
app.use("api/analytics", analyticsRouter);

let server: Server;
let refereshCacheInterval: NodeJS.Timeout;
let isShutdownRunning = false;

const startServer = async () => {
  try {
    await initializeConnections();
    refereshCacheInterval = refereshCache();
    server = app.listen(8082, () => {
      console.log("analytics-service running on 8082");
    });
  } catch (error) {
    console.log("Error while starting analytics-service", error);
    process.exit(1);
  }
};

const shutdown = (error?: Error) => {
  if (isShutdownRunning) return;
  isShutdownRunning = true;
  if (error) {
    console.error("Fatal error:", error);
  } else {
    console.log("shutting down analytics-service");
  }
  if (server) {
    server.close();
  }
  clearTimeout(refereshCacheInterval);
  cleanupConnection()
    .catch((err) => {
      console.error("Error during cleanup inside analytics-service:", err);
      process.exit(1);
    })
    .finally(() => process.exit(error ? 1 : 0));
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

startServer();

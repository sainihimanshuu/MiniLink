import express from "express";
import cookieParser from "cookie-parser";
import { Server } from "http";
import urlRouter from "./routes/url.routes";
import { initializeConnections, cleanupConnection } from "./connections";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.set("trust proxy", true);

app.use(cookieParser());
app.use("/api/url", urlRouter);

let server: Server | null = null;
let isShutdownRunning = false;

const startServer = async () => {
  try {
    await initializeConnections();
    server = app.listen(8081, () => {
      console.log("url-shortening-service running on 8081");
    });
  } catch (error) {
    console.log("Error while starting url-shortening-service", error);
    process.exit(1);
  }
};

const shutdown = (error?: Error) => {
  if (isShutdownRunning) return;
  isShutdownRunning = true;
  if (error) {
    console.error("Fatal error:", error);
  } else {
    console.log("shutting down url-shortening-service");
  }
  if (server) {
    server.close();
  }
  cleanupConnection()
    .catch((err) => {
      console.error("Error during cleanup inside url-shortening-service:", err);
      process.exit(1);
    })
    .finally(() => process.exit(error ? 1 : 0));
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

startServer();

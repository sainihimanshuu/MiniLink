import { initializeConnections, cleanupConnection } from "./connections";
import worker from "./worker";
import dotenv from "dotenv";

dotenv.config();
let isShutdownRunning = false;

const startServer = async () => {
  try {
    await initializeConnections();
    worker();
    console.log("url-to-analytics-message-queue-service running");
  } catch (error) {
    console.log(
      "Error while starting url-to-analytics-message-queue-service",
      error
    );
    process.exit(1);
  }
};

const shutdown = (error?: Error) => {
  if (isShutdownRunning) return;
  isShutdownRunning = true;
  if (error) {
    console.error("Fatal error:", error);
  } else {
    console.log("shutting down url-to-analytics-message-queue-service");
  }
  cleanupConnection()
    .catch((err) => {
      console.error(
        "Error during cleanup inside url-to-analytics-message-queue-service:",
        err
      );
      process.exit(1);
    })
    .finally(() => process.exit(error ? 1 : 0));
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

startServer();

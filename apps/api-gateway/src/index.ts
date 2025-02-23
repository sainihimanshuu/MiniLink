import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

let isShutdownRunning = false;

const urlShortener = proxy("http://localhost:8081");
const analytics = proxy("http://localhost:8082");
const authentication = proxy("http://localhost:8083");

app.use("/api/url", urlShortener);
app.use("/api/analytics", analytics);
app.use("/api/authentication", authentication);

const server = app.listen(8080, () => {
  console.log("api gateway listening at 8080");
});

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
  process.exit(error ? 1 : 0);
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

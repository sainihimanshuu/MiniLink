import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

let isShutdownRunning = false;

const urlShortener = () => {
  console.log("befor url forward");
  proxy(process.env.URL_SHORTENING_SERVICE_URL as string);
  console.log("after url forward");
};
const analytics = () => {
  console.log("befor analytics forward");
  proxy(process.env.ANALYTICS_SERVICE_URL as string);
  console.log("after analytics forward");
};
const authentication = () => {
  console.log("befor authentication forward");
  proxy(process.env.AUTHENTICATION_SERVICE_URL as string);
  console.log("after authentication forward");
};

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
    server.close(() => console.log("server close"));
  }
  process.exit(error ? 1 : 0);
};

process.on("uncaughtException", shutdown);
process.on("unhandledRejection", shutdown);
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

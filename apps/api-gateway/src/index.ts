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

const urlShortener = proxy("http://localhost:8081");
const analytics = proxy("http://localhost:8082");
const authentication = proxy("http://localhost:8083");

app.use("/api/url", urlShortener);
app.use("/api/analytics", analytics);
app.use("api/authentication", authentication);

const server = app.listen(8080, () => {
  console.log("api gateway listening at 8080");
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("api-gateway is shutting down");
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
process.on("SIGINT", uncaughtErrorHandler);
process.on("SIGTERM", uncaughtErrorHandler);

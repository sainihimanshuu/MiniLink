import express from "express";

const app = express();

const server = app.listen(8083, () => {
  console.log("authentication services listening at 8083");
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("authentication service is shutting down");
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

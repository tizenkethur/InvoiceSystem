import express from "express";
import apiRouter from "./routes/api.routes";
// import errorHandler from "./middlewares/error-handler";

const app = express();

app.use("/api", apiRouter);
// app.use(errorHandler);

export default app;

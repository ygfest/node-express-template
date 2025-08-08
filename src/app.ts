import express from "express";
import cors from "cors";
import helmet from "helmet";
import routes from "./routes";
import { notFoundHandler, errorHandler } from "./middlewares";
import { httpLogger } from "./config/logger";

const app = express();

// Security & common middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(httpLogger);

// Routes
app.use("/api", routes);

// 404 and error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export default app;

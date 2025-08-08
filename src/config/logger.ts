import morgan from "morgan";

export const httpLogger = morgan(
  process.env.NODE_ENV !== "production" ? "dev" : "combined"
);

export default httpLogger;

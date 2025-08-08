import app from "./app";
import env from "./config/env";

const server = app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${env.port}`);
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});

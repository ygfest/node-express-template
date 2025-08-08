import dotenv from "dotenv";
import path from "path";

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env";
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  port: Number(process.env.PORT ?? 3000),
  openaiApiKey: process.env.OPENAI_API_KEY ?? "",
};

if (!env.openaiApiKey) {
  throw new Error("OpenAI api key is required.");
}

export default env;

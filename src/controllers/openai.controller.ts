import OpenAI from "openai";
import env from "../config/env";

const client = new OpenAI({
  apiKey: env.openaiApiKey,
});

export async function testGPT5() {
  const response = await client.responses.create({
    model: "gpt-5",
    input: "What is the best routine to become  a good software engineer?",
  });

  return response;
}

console.log(testGPT5());

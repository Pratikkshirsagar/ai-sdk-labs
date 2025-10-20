import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

const model = openai("gpt-5-mini-2025-08-07");

const prompt = "What is the capital of France?";

const result = await generateText({
  model,
  prompt,
});

console.log(result.text);

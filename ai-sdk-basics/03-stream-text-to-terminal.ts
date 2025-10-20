import { google } from "@ai-sdk/google";
import { streamText } from "ai";

const model = google("gemini-2.0-flash");

const prompt = "Tell me somthing about manchester united";

const stream = streamText({
  model,
  prompt,
});

for await (const chunk of stream.textStream) {
  process.stdout.write(chunk);
}

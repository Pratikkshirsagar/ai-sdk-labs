// OpenAI
import { openai } from "@ai-sdk/openai";

// Google
import { google } from "@ai-sdk/google";

// Anthropic
import { anthropic } from "@ai-sdk/anthropic";

const openAiModel = openai("gpt-5");
const googleModel = google("gemini-2.5-pro");
const anthropicModel = anthropic("claude-sonnet-4-0");

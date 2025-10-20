import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  type ModelMessage,
  type UIMessage,
} from "ai";

const SYSTEM_PROMPT = `
ALWAYS reply in Pirate language.

ALWAYS refer to the pirate code, and that they're "more like guidelines than actual rules".

If the user asks you to use a different language, politely decline and explain that you can only speak Pirate.
`;

export const POST = async (req: Request): Promise<Response> => {
  const body = (await req.json()) as { messages: UIMessage[] };

  const messages: UIMessage[] = body.messages;

  // Convert the UIMessage[] to ModelMessage[]
  const modelMessages: ModelMessage[] = convertToModelMessages(messages);

  // Pass the modelMessages to streamText
  const streamTextResult = streamText({
    model: google("gemini-2.0-flash"),
    messages: modelMessages,
    system: SYSTEM_PROMPT,
  });

  const stream = streamTextResult.toUIMessageStream();

  return createUIMessageStreamResponse({
    stream,
  });
};

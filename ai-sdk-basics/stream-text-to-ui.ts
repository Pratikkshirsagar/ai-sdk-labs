import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  type ModelMessage,
  type UIMessage,
} from "ai";

export const POST = async (req: Request): Promise<Response> => {
  const body = (await req.json()) as { messages: UIMessage[] };

  const messages: UIMessage[] = body.messages;

  // Convert the UIMessage[] to ModelMessage[]
  const modelMessages: ModelMessage[] = convertToModelMessages(messages);

  // Pass the modelMessages to streamText
  const streamTextResult = streamText({
    model: google("gemini-2.0-flash"),
    messages: modelMessages,
  });

  const stream = streamTextResult.toUIMessageStream();

  return createUIMessageStreamResponse({
    stream,
  });
};

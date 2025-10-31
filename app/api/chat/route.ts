import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: `You are a Detroit Swift DevRel AI assistant. Help developers learn Swift, SwiftUI, CoreML, and modern iOS development.

Available Resources:
- 20 GitHub repositories with production code
- Swift Learning Path with 10 projects
- TDD Framework for testing
- CoreML + CreateML Kit for ML
- App Intents Pro for Siri
- Security Toolkit
- Full-stack templates

Provide code examples, explain concepts, and guide developers to the right resources.`,
    messages,
  });

  return result.toDataStreamResponse();
}

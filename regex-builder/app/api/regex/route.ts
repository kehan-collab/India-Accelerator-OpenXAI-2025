import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt: `Generate a valid regex for: ${prompt}.
Return ONLY the regex, nothing else.`,
      }),
    });

    const reader = response.body?.getReader();
    let result = "";
    if (reader) {
      const decoder = new TextDecoder();
      let done = false;
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        if (value) {
          const chunk = JSON.parse(decoder.decode(value));
          if (chunk.response) result += chunk.response;
        }
      }
    }

    return NextResponse.json({ regex: result.trim() });
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate regex" }, { status: 500 });
  }
}

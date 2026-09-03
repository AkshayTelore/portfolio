import { NextResponse } from "next/server";
import { answerAkshayQuestion } from "@/lib/chatbotKnowledge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const query = body?.message || "";

    if (!query || typeof query !== "string") {
      return NextResponse.json(
        { error: "Query message is required." },
        { status: 400 }
      );
    }

    // Process question through knowledge engine
    const response = answerAkshayQuestion(query);

    return NextResponse.json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat query." },
      { status: 500 }
    );
  }
}

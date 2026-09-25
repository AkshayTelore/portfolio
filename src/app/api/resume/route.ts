import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    let filePath = path.join(process.cwd(), "src", "assets", "Akshay_Telore_Resume.pdf");
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), "public", "Akshay_Telore_Resume.pdf");
    }
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Akshay_Telore_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to serve resume:", error);
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "assets", "AkshayFullStackResume.pdf");
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="AkshayFullStackResume.pdf"',
      },
    });
  } catch (error) {
    console.error("Failed to serve resume:", error);
    return NextResponse.json({ error: "Failed to download resume" }, { status: 500 });
  }
}

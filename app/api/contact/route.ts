import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/sendEmail";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, reason, message } = body ?? {};

  if (!name || !email || !reason || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail({ name, email, reason, message });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

import { Resend } from "resend";

export interface ContactPayload {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "vinamrapandey22@gmail.com";
  // Sandbox sender until a custom domain is verified in Resend.
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  return resend.emails.send({
    from: `Portfolio Contact Form <${fromEmail}>`,
    to: toEmail,
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.reason} — ${payload.name}`,
    text: `From: ${payload.name} <${payload.email}>\nReason: ${payload.reason}\n\n${payload.message}`,
  });
}

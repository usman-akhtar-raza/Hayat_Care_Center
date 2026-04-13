import { NextResponse } from "next/server";
import {
  isSmtpConfigured,
  sendServiceInquiryEmails,
  type ServiceInquiryPayload,
} from "@/lib/serviceInquiryMail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SMTP_CONFIG_HINT =
  "Add SMTP_USER and SMTP_PASS to .env.local (see .env.example). For local testing only, set EMAIL_DEV_BYPASS=true.";

function badRequest(message: string) {
  return NextResponse.json({ ok: false, error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON body.");
  }

  if (!body || typeof body !== "object") {
    return badRequest("Expected a JSON object.");
  }

  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim().toLowerCase() : "";
  const service = typeof b.service === "string" ? b.service.trim() : "";
  const description = typeof b.description === "string" ? b.description.trim() : "";
  const address = typeof b.address === "string" ? b.address.trim() : "";

  if (!name || name.length > 200) return badRequest("Name is required (max 200 characters).");
  if (!email || !EMAIL_RE.test(email)) return badRequest("A valid email is required.");
  if (!service || service.length > 200) return badRequest("Service is required (max 200 characters).");
  if (!description || description.length > 8000) return badRequest("Description is required (max 8000 characters).");
  if (!address || address.length > 500) return badRequest("Address is required (max 500 characters).");

  const payload: ServiceInquiryPayload = { name, email, service, description, address };

  const devBypass =
    process.env.NODE_ENV === "development" && process.env.EMAIL_DEV_BYPASS === "true";
  if (!devBypass && !isSmtpConfigured()) {
    return NextResponse.json(
      { ok: false, error: `Email is not configured. ${SMTP_CONFIG_HINT}` },
      { status: 503 },
    );
  }

  try {
    await sendServiceInquiryEmails(payload);
  } catch (err) {
    console.error("[service-inquiry]", err);
    const message = err instanceof Error ? err.message : "Email failed.";
    const isConfig = message.includes("Missing SMTP");
    return NextResponse.json(
      {
        ok: false,
        error: isConfig ? `Email is not configured. ${SMTP_CONFIG_HINT}` : "Could not send email. Try again later.",
      },
      { status: isConfig ? 503 : 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

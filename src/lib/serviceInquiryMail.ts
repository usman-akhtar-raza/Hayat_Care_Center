import nodemailer from "nodemailer";

export type ServiceInquiryPayload = {
  name: string;
  email: string;
  service: string;
  description: string;
  address: string;
};

function getMailConfig() {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const ownerEmail = process.env.OWNER_EMAIL?.trim() || "Hayatcarecenters@gmail.com";
  const fromName = process.env.MAIL_FROM_NAME?.trim() || "Hayat Care Centers";

  if (!user || !pass) {
    throw new Error("Missing SMTP_USER or SMTP_PASS environment variables.");
  }

  return {
    user,
    pass,
    ownerEmail,
    fromName,
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || "465"),
    secure: process.env.SMTP_SECURE !== "false",
  };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Local dev only: set EMAIL_DEV_BYPASS=true in `.env.local` to skip SMTP (logs payload, returns success).
 * Never enable in production.
 */
export function isSmtpConfigured(): boolean {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  return Boolean(user && pass);
}

export async function sendServiceInquiryEmails(payload: ServiceInquiryPayload) {
  const devBypass =
    process.env.NODE_ENV === "development" && process.env.EMAIL_DEV_BYPASS === "true";

  if (devBypass) {
    console.warn("[service-inquiry] EMAIL_DEV_BYPASS: skipping send. Payload:", payload);
    return;
  }

  const { user, pass, ownerEmail, fromName, host, port, secure } = getMailConfig();

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const { name, email, service, description, address } = payload;
  const from = `"${fromName}" <${user}>`;

  const ownerHtml = `
    <h2>New service inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Service:</strong> ${escapeHtml(service)}</p>
    <p><strong>Address:</strong> ${escapeHtml(address)}</p>
    <p><strong>Description:</strong></p>
    <p>${escapeHtml(description).replace(/\n/g, "<br/>")}</p>
  `;

  const userHtml = `
    <p>Hi ${escapeHtml(name)},</p>
    <p>Thank you for contacting <strong>${escapeHtml(fromName)}</strong>. We received your request for <strong>${escapeHtml(service)}</strong> and will review it shortly.</p>
    <p><strong>What you sent us:</strong></p>
    <ul>
      <li><strong>Service:</strong> ${escapeHtml(service)}</li>
      <li><strong>Address:</strong> ${escapeHtml(address)}</li>
      <li><strong>Details:</strong> ${escapeHtml(description).replace(/\n/g, "<br/>")}</li>
    </ul>
    <p>If anything needs to change, reply to this email or call us using the number on our website.</p>
    <p>— ${escapeHtml(fromName)}</p>
  `;

  await transporter.sendMail({
    from,
    to: ownerEmail,
    replyTo: email,
    subject: `New inquiry: ${service} — ${name}`,
    text: `New inquiry\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nAddress: ${address}\n\nDescription:\n${description}`,
    html: ownerHtml,
  });

  await transporter.sendMail({
    from,
    to: email,
    subject: `We received your request — ${fromName}`,
    text: `Hi ${name},\n\nThank you for contacting ${fromName}. We received your request for ${service}.\n\nAddress: ${address}\n\nYour message:\n${description}\n\nWe will be in touch soon.`,
    html: userHtml,
  });
}

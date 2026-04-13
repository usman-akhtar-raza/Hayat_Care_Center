"use client";

import { useState, type FormEvent } from "react";
import { contactDetails } from "@/data/siteContent";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const address = String(fd.get("address") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const callbackTime = String(fd.get("callbackTime") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    const consent = fd.get("consent") === "on";

    if (!consent) {
      setErrorMessage("Please agree to be contacted so we can follow up.");
      setStatus("error");
      return;
    }

    const descriptionParts = [
      message && `Message:\n${message}`,
      phone && `Phone: ${phone}`,
      callbackTime && `Preferred callback: ${callbackTime}`,
    ].filter(Boolean);
    let description = descriptionParts.join("\n\n") || "(No additional details provided.)";
    if (description.length > 8000) {
      description = `${description.slice(0, 7997)}...`;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/service-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, description, address }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again or call us.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-[#dcc690]/55 bg-white p-6 shadow-[0_22px_54px_-24px_rgba(7,61,122,0.4)] md:p-8 lg:p-9"
    >
      <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-[#ffe7a6] via-[#D5664B] to-[#0a4a8f]" />

      <div className="flex flex-wrap items-center gap-2.5">
        <span className="rounded-full border border-[#f2d38b] bg-[#fff9e8] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9b6d14]">
          Tour planning
        </span>
        <span className="rounded-full border border-[#d9e5f5] bg-[#f5f9ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#265f98]">
          Home care consult
        </span>
      </div>

      <h3 className="mt-4 text-3xl font-bold leading-tight text-[var(--ink)]">Request A Callback</h3>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
        Tell us where you are in the decision process and we will respond with a focused plan for your next step.
      </p>

      {status === "success" && (
        <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-900" role="status">
          Thank you — your request was submitted. Our team will follow up soon.
        </p>
      )}

      {status === "error" && errorMessage && (
        <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-900" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label htmlFor="contact-name" className="text-sm font-semibold text-[var(--ink)]">
          Full Name
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={200}
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            placeholder="Your full name"
          />
        </label>

        <label htmlFor="contact-phone" className="text-sm font-semibold text-[var(--ink)]">
          Phone
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            placeholder={contactDetails.phoneLabel}
          />
        </label>

        <label htmlFor="contact-email" className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            placeholder="you@example.com"
          />
        </label>

        <label htmlFor="contact-address" className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
          Address
          <input
            id="contact-address"
            name="address"
            type="text"
            required
            maxLength={500}
            autoComplete="street-address"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            placeholder="Street, city, state / ZIP"
          />
        </label>

        <label htmlFor="contact-service" className="text-sm font-semibold text-[var(--ink)]">
          Service Interest
          <select
            id="contact-service"
            name="service"
            required
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option value="Adult care center">Adult care center</option>
            <option value="Home care agency">Home care agency</option>
            <option value="Non-medical transportation">Non-medical transportation</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label htmlFor="contact-time" className="text-sm font-semibold text-[var(--ink)]">
          Preferred Callback Time
          <select
            id="contact-time"
            name="callbackTime"
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            defaultValue=""
          >
            <option value="">No preference</option>
            <option value="Morning 9 AM to 12 PM">Morning 9 AM to 12 PM</option>
            <option value="Afternoon 12 PM to 4 PM">Afternoon 12 PM to 4 PM</option>
            <option value="Evening 4 PM to 6 PM">Evening 4 PM to 6 PM</option>
          </select>
        </label>

        <label htmlFor="contact-message" className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
          What Are You Looking For
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            maxLength={7500}
            className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
            placeholder="Tell us about care needs timing preferred floor plan or tour questions"
          />
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-start gap-2 text-xs leading-5 text-[var(--ink-soft)]">
          <input name="consent" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
          <span>I agree to be contacted by phone or email about care options and scheduling.</span>
        </label>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-bold text-white transition enabled:hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
}

import type { Metadata } from "next";
import { contactDetails } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Contact | Hayat Care Center",
  description: "Contact Hayat Care Center to request a callback or schedule a visit.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">Contact</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            Book A Visit Or Request A Callback
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            Share your needs and we will respond with practical next steps for
            care, enrollment, and scheduling.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="rounded-3xl bg-[var(--brand-navy)] p-8 text-white">
            <h2 className="text-3xl font-bold">Hayat Care Center</h2>
            <ul className="mt-6 space-y-3 text-sm text-blue-50">
              <li>Phone: <a href={contactDetails.phoneHref} className="font-semibold text-white">{contactDetails.phoneLabel}</a></li>
              <li>Email: {contactDetails.email}</li>
              <li>Address: {contactDetails.address}</li>
              <li>Hours: {contactDetails.hours}</li>
            </ul>
          </aside>

          <form className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[var(--line)] md:p-8">
            <h3 className="text-2xl font-bold text-[var(--ink)]">Request A Call Back</h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">
              Our team typically responds within one business day.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[var(--ink)]">
                Full Name
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder="Your full name"
                />
              </label>
              <label className="text-sm font-semibold text-[var(--ink)]">
                Phone
                <input
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder={contactDetails.phoneLabel}
                />
              </label>
              <label className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
                Email
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
                Care Needs
                <textarea
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--ring)]"
                  placeholder="Tell us about your loved one and required support"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

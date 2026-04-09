import type { Metadata } from "next";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { contactDetails } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Contact | Hayat Care Center",
  description: "Contact Hayat Care Center to schedule a visit or request a callback.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Contact Us
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Schedule A Tour Or Request A Conversation With Our Team
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            We can help you compare care options, floor plans, community
            features, and the move-in process based on your family&apos;s needs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <BorderGlow
            data-reveal
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
            backgroundColor="#0e4b8f"
            glowColor="210 84 70"
          >
            <aside className="h-full rounded-3xl bg-[var(--brand-navy)] p-8 text-white">
              <h2 className="text-3xl font-bold">Hayat Care Center</h2>
              <ul className="mt-6 space-y-3 text-sm text-blue-50">
                <li>
                  Main Line:{" "}
                  <a
                    href={contactDetails.phoneHref}
                    className="font-semibold text-white"
                  >
                    {contactDetails.phoneLabel}
                  </a>
                </li>
                <li>
                  Support Line:{" "}
                  <a
                    href={contactDetails.supportHref}
                    className="font-semibold text-white"
                  >
                    {contactDetails.supportLine}
                  </a>
                </li>
                <li>Email: {contactDetails.email}</li>
                <li>Address: {contactDetails.address}</li>
                <li>Hours: {contactDetails.hours}</li>
              </ul>
            </aside>
          </BorderGlow>

          <BorderGlow
            data-reveal
            data-reveal-delay={120}
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <form className="h-full rounded-3xl bg-white p-7 md:p-8">
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                Request A Callback
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">
                Share a few details and our team will follow up to coordinate the
                next step.
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
                  What Are You Looking For?
                  <textarea
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-[var(--line)] px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--ring)]"
                    placeholder="Tell us about care needs, timing, preferred floor plan, or tour questions"
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
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { contactDetails } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Contact | Hayat Care Centers",
  description: "Contact Hayat Care Centers to schedule a visit or request a callback.",
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

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/95 via-white to-white py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_8%_14%,rgba(213,102,75,0.14),transparent_46%),radial-gradient(ellipse_at_92%_84%,rgba(7,61,122,0.14),transparent_44%)]"
        />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <aside
            data-reveal
            className="relative overflow-hidden rounded-[2rem] border border-[#0a4a8f]/25 bg-[#073D7A] p-7 text-white shadow-[0_20px_48px_-18px_rgba(7,61,122,0.55)] md:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D5664B]/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-8 h-44 w-44 rounded-full bg-[#2b73b9]/30 blur-3xl" />

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">Direct support</p>
            <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight text-white md:text-4xl">
              Reach Hayat In The Way That Fits Your Family Best
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/85">
              Call for urgent scheduling, request a callback, or send details about your goals. We reply with practical next
              steps, not generic templates.
            </p>

            <ul className="mt-8 space-y-3">
              <li className="rounded-xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Main line</p>
                <a href={contactDetails.phoneHref} className="mt-1 block text-base font-semibold text-white">
                  {contactDetails.phoneLabel}
                </a>
              </li>
              <li className="rounded-xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Support line</p>
                <a href={contactDetails.supportHref} className="mt-1 block text-base font-semibold text-white">
                  {contactDetails.supportLine}
                </a>
              </li>
              <li className="rounded-xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Email</p>
                <p className="mt-1 text-sm text-white">{contactDetails.email}</p>
              </li>
              <li className="rounded-xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">Address and hours</p>
                <p className="mt-1 text-sm leading-6 text-white">{contactDetails.address}</p>
                <p className="mt-1 text-sm text-white/90">{contactDetails.hours}</p>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/20 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">What happens next</p>
              <ol className="mt-3 grid gap-2.5 text-sm text-white/90">
                <li>1. A coordinator reviews your needs and timeline</li>
                <li>2. We recommend care paths and visit options</li>
                <li>3. You receive clear follow up and scheduling support</li>
              </ol>
            </div>
          </aside>

          <form
            data-reveal
            data-reveal-delay={120}
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

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <label htmlFor="contact-name" className="text-sm font-semibold text-[var(--ink)]">
                Full Name
                <input
                  id="contact-name"
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  placeholder="Your full name"
                />
              </label>

              <label htmlFor="contact-phone" className="text-sm font-semibold text-[var(--ink)]">
                Phone
                <input
                  id="contact-phone"
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  placeholder={contactDetails.phoneLabel}
                />
              </label>

              <label htmlFor="contact-email" className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
                Email
                <input
                  id="contact-email"
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  placeholder="you@example.com"
                />
              </label>

              <label htmlFor="contact-service" className="text-sm font-semibold text-[var(--ink)]">
                Service Interest
                <select
                  id="contact-service"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Adult care center</option>
                  <option>Home care agency</option>
                  <option>Non-medical transportation</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label htmlFor="contact-time" className="text-sm font-semibold text-[var(--ink)]">
                Preferred Callback Time
                <select
                  id="contact-time"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a window
                  </option>
                  <option>Morning 9 AM to 12 PM</option>
                  <option>Afternoon 12 PM to 4 PM</option>
                  <option>Evening 4 PM to 6 PM</option>
                </select>
              </label>

              <label htmlFor="contact-message" className="text-sm font-semibold text-[var(--ink)] sm:col-span-2">
                What Are You Looking For
                <textarea
                  id="contact-message"
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-[#D5664B] focus:bg-white focus:ring-2 focus:ring-[#ffd976]"
                  placeholder="Tell us about care needs timing preferred floor plan or tour questions"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <label className="flex items-start gap-2 text-xs leading-5 text-[var(--ink-soft)]">
                <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-[#D5664B]" />
                <span>I agree to be contacted by phone or email about care options and scheduling.</span>
              </label>
              <button
                type="submit"
                className="inline-flex rounded-full bg-[var(--brand-orange)] px-7 py-3 text-sm font-bold text-white"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

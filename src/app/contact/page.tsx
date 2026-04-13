import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
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

          <div data-reveal data-reveal-delay={120}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

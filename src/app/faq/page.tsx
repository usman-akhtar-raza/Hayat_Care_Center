import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { faqs } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "FAQ | Hayat Care Center",
  description: "Find answers to common questions about life at Hayat Care Center.",
};

export default function FaqPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            FAQ
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Answers To Common Questions About The Community
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Use this page to understand resident fit, floor plans, support
            options, tours, and the overall day-to-day lifestyle at Hayat.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <BorderGlow
                key={item.q}
                data-reveal
                data-reveal-delay={index * 70}
                data-tilt
                borderRadius={14}
                glowRadius={20}
              >
                <details className="rounded-xl bg-white p-5">
                  <summary className="cursor-pointer list-none pr-7 text-sm font-bold text-[var(--ink)] marker:content-none">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {item.a}
                  </p>
                </details>
              </BorderGlow>
            ))}
          </div>

          <BorderGlow
            data-reveal
            data-reveal-delay={160}
            data-tilt
            className="mt-10 h-full"
            borderRadius={18}
            glowRadius={24}
          >
            <div className="h-full rounded-2xl bg-white p-7 text-center">
              <h2 className="text-2xl font-bold text-[var(--ink)]">
                Need A More Specific Answer?
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Our team can walk through your family&apos;s timeline, priorities,
                and questions one-on-one.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                Contact Hayat
              </Link>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

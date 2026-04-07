import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "FAQ | Hayat Care Center",
  description: "Find answers to common questions about services, enrollment, and daily care.",
};

export default function FaqPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">FAQ</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            Answers To The Questions Families Ask Most
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            Use this page to quickly understand fit, enrollment timing, documents,
            schedule flexibility, and coverage support.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="rounded-xl bg-white p-5 ring-1 ring-[var(--line)]">
                <summary className="cursor-pointer list-none pr-7 text-sm font-bold text-[var(--ink)] marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-7 text-center ring-1 ring-[var(--line)]">
            <h2 className="text-2xl font-bold text-[var(--ink)]">Need A Specific Answer?</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              Our staff can walk you through your exact situation and recommend
              next steps.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Contact Hayat Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

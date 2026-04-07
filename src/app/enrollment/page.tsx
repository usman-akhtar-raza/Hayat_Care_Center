import type { Metadata } from "next";
import Link from "next/link";
import { coverageOptions, processSteps } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Enrollment | Hayat Care Center",
  description: "Review the enrollment process and eligibility guidance for Hayat Care Center.",
};

const documentChecklist = [
  "Government-issued ID",
  "Insurance and coverage details",
  "Medication list and pharmacy details",
  "Primary physician contact info",
  "Mobility or daily-care notes",
] as const;

export default function EnrollmentPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">Enrollment</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            A Clear 3-Step Enrollment Journey
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            We keep intake simple so families can move quickly from questions
            to care without confusion.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {processSteps.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">{item.step}</p>
                <h2 className="mt-2 text-xl font-bold text-[var(--ink)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{item.detail}</p>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[var(--line)]">
            <h3 className="text-2xl font-bold text-[var(--ink)]">Coverage & Eligibility</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              Our team explains accepted coverage and required paperwork early,
              so there are no surprises during onboarding.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {coverageOptions.map((option) => (
                <span
                  key={option}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[var(--brand-navy)]"
                >
                  {option}
                </span>
              ))}
            </div>

            <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand-blue)]">
              Bring These Documents
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-[var(--ink-soft)]">
              {documentChecklist.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                Request Enrollment Call
              </Link>
              <Link
                href="/faq"
                className="inline-flex justify-center rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                Read Enrollment FAQs
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Services | Hayat Care Center",
  description: "Explore all care and support services offered by Hayat Care Center.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            Comprehensive Daytime Support For Members And Families
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            Our services are designed to address health, daily routine, social
            connection, and caregiver respite in one coordinated program.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--line)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg)] text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h2 className="mt-4 text-xl font-bold text-[var(--ink)]">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white p-7 ring-1 ring-[var(--line)]">
            <h3 className="text-2xl font-bold text-[var(--ink)]">Need A Custom Schedule?</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              We can structure attendance and care routines around family logistics,
              medical appointments, and member comfort.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                Talk To Care Team
              </Link>
              <Link
                href="/enrollment"
                className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                View Enrollment Steps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

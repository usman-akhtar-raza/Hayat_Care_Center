import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { careerOpenings, careerBenefits, contactDetails } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Careers | Hayat Care Center",
  description: "Join the Hayat Care Center team. Explore open positions in senior care, dining, activities, and community support.",
};

export default function CareersPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Careers
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Build A Career That Makes A Difference Every Day
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat Care Center is looking for compassionate, reliable people
            who want to be part of a team that supports older adults with
            dignity, warmth, and professionalism. If you find meaning in
            helping others thrive, we would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal>
            <ScrollFloat
              as="h2"
              containerClassName="text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              Current Openings
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={70}
            className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-soft)]"
          >
            We are always interested in hearing from qualified candidates,
            even if a specific position is not listed below.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {careerOpenings.map((job, index) => (
              <BorderGlow
                key={job.title}
                data-reveal
                data-reveal-delay={index * 80}
                data-tilt
                className="h-full"
                borderRadius={16}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <span className="inline-block rounded-full bg-[var(--brand-blue)]/10 px-3 py-1 text-xs font-bold text-[var(--brand-blue)]">
                    {job.type}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-[var(--ink)]">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {job.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div data-reveal>
              <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
                Why Work At Hayat
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
                Working in senior care is not just a job. It is a chance to
                bring comfort, connection, and stability to people who deserve
                it. At Hayat, team members are valued, supported, and given
                room to grow.
              </p>
              <ul className="mt-6 space-y-3">
                {careerBenefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 text-sm text-[var(--ink-soft)]">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <BorderGlow
              data-reveal
              data-reveal-delay={120}
              data-tilt
              className="h-full"
              borderRadius={24}
              glowRadius={30}
            >
              <div className="h-full rounded-3xl bg-[var(--bg)] p-8">
                <h3 className="text-2xl font-bold text-[var(--ink)]">
                  Ready To Apply?
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                  Send your resume and a brief introduction to our team. We
                  review applications on a rolling basis and will reach out to
                  qualified candidates promptly.
                </p>
                <div className="mt-5 space-y-3">
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                  >
                    Email Your Application
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                  >
                    Contact Us For Details
                  </Link>
                </div>
                <p className="mt-4 text-xs text-[var(--ink-soft)]">
                  Email: {contactDetails.email} | Phone: {contactDetails.phoneLabel}
                </p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </section>
    </>
  );
}

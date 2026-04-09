import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { livingOptionBenefits, services } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Assisted Support | Hayat Care Center",
  description: "Explore the assisted support services available at Hayat Care Center.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Care Options
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Assisted Support That Adds Confidence To Everyday Living
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat&apos;s approach is built around personalized support, strong
            communication, and a community atmosphere that still feels bright,
            social, and resident-centered.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {livingOptionBenefits.map((item, index) => (
              <BorderGlow
                key={item.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <h2 className="text-xl font-bold text-[var(--ink)]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {item.text}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <BorderGlow
                key={service.title}
                data-reveal
                data-reveal-delay={index * 70}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="h-full rounded-2xl bg-[var(--bg)] p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[var(--ink)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {service.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <BorderGlow
            data-reveal
            data-reveal-delay={180}
            data-tilt
            className="mt-10 h-full"
            borderRadius={18}
            glowRadius={24}
          >
            <div className="h-full rounded-2xl bg-white p-7">
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                Want Help Choosing The Right Level Of Support?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                We can walk through daily routines, care expectations, family
                priorities, and the type of suite or services that would be the
                best fit for your next step.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                >
                  Talk To The Team
                </Link>
                <Link
                  href="/enrollment"
                  className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  Review The Move-In Process
                </Link>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

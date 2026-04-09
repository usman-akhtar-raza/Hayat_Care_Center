import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { communityStats, trustPoints } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About The Community | Hayat Care Center",
  description: "Learn about Hayat Care Center, our atmosphere, and our community approach.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            About The Community
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              A Warm, Hospitality-First Setting For Daily Support And Senior
              Living
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat Care Center is designed for older adults who want both support
            and a sense of everyday belonging. The community blends practical
            assistance, welcoming shared spaces, and purposeful routines that
            help residents feel settled and families feel reassured.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <BorderGlow
            data-reveal
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <article className="h-full rounded-3xl bg-white p-8">
              <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
                What Defines Hayat
              </h2>
              <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
                Residents benefit from a community that feels active and refined
                rather than overly clinical. The environment is built around
                thoughtful service, resident dignity, and a daily rhythm that
                includes dining, social connection, life enrichment, and support
                when it is needed.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
                Families choose Hayat because it pairs clear communication with a
                visible standard of care. From the first tour onward, the goal is
                to make the next chapter feel organized, welcoming, and genuinely
                supportive.
              </p>
            </article>
          </BorderGlow>

          <div className="grid gap-4 sm:grid-cols-2">
            {communityStats.map((stat, index) => (
              <BorderGlow
                key={stat.label}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={16}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <p className="text-3xl font-bold text-[var(--brand-navy)]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[var(--ink-soft)]">{stat.label}</p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal>
            <ScrollFloat
              as="h2"
              containerClassName="text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              Why Families Explore Hayat
            </ScrollFloat>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trustPoints.map((point, index) => (
              <BorderGlow
                key={point.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="h-full rounded-2xl bg-[var(--bg)] p-6">
                  <h3 className="text-xl font-bold text-[var(--ink)]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {point.text}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={220}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="/amenities"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore Amenities
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Schedule A Tour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

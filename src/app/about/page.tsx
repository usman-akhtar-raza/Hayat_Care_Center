import type { Metadata } from "next";
import Link from "next/link";
import { stats, trustPoints } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About | Hayat Care Center",
  description: "Learn about Hayat Care Center, our mission, and care philosophy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">About Hayat</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            A Community-Centered Approach To Adult Daycare
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            Hayat Care Center supports adults who need safe daytime supervision,
            social engagement, and health-focused routines while giving families
            confidence and breathing room.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[var(--line)]">
            <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">Our Mission</h2>
            <p className="mt-5 text-base leading-7 text-[var(--ink-soft)]">
              We provide compassionate, structured care that promotes dignity,
              independence, and meaningful connection. Every member receives
              attention tailored to personal goals, health needs, and family context.
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--ink-soft)]">
              Our model combines practical care coordination with social and
              cognitive programs so members feel supported, active, and respected.
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)]">
                <p className="text-3xl font-bold text-[var(--brand-navy)]">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--ink-soft)]">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">Why Families Choose Hayat</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {trustPoints.map((point) => (
              <article key={point.title} className="rounded-2xl bg-[var(--bg)] p-6 ring-1 ring-[var(--line)]">
                <h3 className="text-xl font-bold text-[var(--ink)]">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{point.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/enrollment"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Start Enrollment
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

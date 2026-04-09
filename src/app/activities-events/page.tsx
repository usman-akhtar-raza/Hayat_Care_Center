import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { activityCategories } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Activities & Events | Hayat Care Center",
  description: "Explore the activity calendar and social programming at Hayat Care Center.",
};

const weeklyRhythm = [
  "Morning movement, stretching, and coffee socials",
  "Creative workshops, music sessions, and conversation circles",
  "Hosted events, family gatherings, and seasonal celebrations",
  "Quiet reflection, reading time, and personalized enrichment",
] as const;

export default function ActivitiesEventsPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Activities & Events
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              A Calendar Built Around Social Energy, Routine, And Resident
              Choice
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            The Hayat calendar brings structure to the week without making the
            day feel rigid. Residents can join in, slow down, or mix both
            depending on how they want to spend their time.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 md:grid-cols-2">
            {activityCategories.map((item, index) => (
              <BorderGlow
                key={item.title}
                data-reveal
                data-reveal-delay={index * 70}
                data-tilt
                className="h-full"
                borderRadius={16}
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

          <BorderGlow
            data-reveal
            data-reveal-delay={140}
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <aside className="h-full rounded-3xl bg-white p-7">
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                What A Week Can Look Like
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--ink-soft)]">
                {weeklyRhythm.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/wellness"
                  className="inline-flex justify-center rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  Explore Life Enrichment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                >
                  Plan A Visit
                </Link>
              </div>
            </aside>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

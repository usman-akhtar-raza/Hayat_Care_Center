import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyDayJourney from "@/components/adult-care/StickyDayJourney";
import { adultCareCenterSummary, homeVerticalsDeepDive } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Adult Care Center | Hayat Care Centers",
  description:
    "Explore Hayat adult care center services including supervised daytime support social engagement meals and personalized care planning.",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";
const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";
const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

const relatedPaths = [
  {
    title: "Home care agency",
    description: "Keep support going in the evenings or weekends with caregiver visits at home.",
    href: "/home-care-agency",
  },
  {
    title: "Non-medical transportation",
    description: "Coordinate rides to and from the center or to appointments and errands.",
    href: "/non-medical-transportation",
  },
] as const;

export default function AdultCareCenterPage() {
  return (
    <>
      <section className="hero-grid border-b border-slate-200">
        <div className={`${shell} py-16 md:py-20`}>
          <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
            <div data-reveal>
              <p className={sectionEyebrow}>{adultCareCenterSummary.eyebrow}</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Daytime care that combines supervision structure and genuine community
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                {adultCareCenterSummary.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Plan a center visit
                </Link>
                <Link href="/home-care-agency" className={btnOutline}>
                  Explore home care
                </Link>
              </div>
            </div>

            <div
              data-reveal
              data-reveal-delay={80}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md"
            >
              <Image
                src="/images/seniors/senior-care-center-01.jpg"
                alt="Adult care center participants in a welcoming daytime setting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className={shell}>
          <div className={`${inner} grid gap-8 lg:grid-cols-2`}>
            <article data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">What is included in center based care</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                {adultCareCenterSummary.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article
              data-reveal
              data-reveal-delay={70}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm md:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900">Who this path fits best</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{homeVerticalsDeepDive.adult.fitFor}</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {homeVerticalsDeepDive.adult.outcomes.map((outcome) => (
                  <span
                    key={outcome}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60 py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className={sectionEyebrow}>
                Daily rhythm
              </p>
              <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                Sticky reveal of a full center day
              </h2>
              <p data-reveal data-reveal-delay={70} className="mt-4 text-slate-600">
                Scroll through each step to see how the day unfolds from arrival to family handoff with visual context.
              </p>
            </div>

            <div className="mt-10">
              <StickyDayJourney />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[1.05fr_0.95fr] md:p-9">
              <div data-reveal>
                <p className={sectionEyebrow}>Next step</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                  Build a care plan that can evolve over time
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Many families combine center based care with support at home or transportation. We can start with one
                  service and expand only when needed.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className={btnPrimary}>
                    Talk with our team
                  </Link>
                  <Link href="/home-care-agency" className={btnOutline}>
                    Explore home care agency
                  </Link>
                </div>
              </div>

              <div className="grid gap-3">
                {relatedPaths.map((item, index) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    data-reveal
                    data-reveal-delay={80 + index * 40}
                    className="group rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition hover:border-slate-300 hover:bg-white"
                  >
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-[#073D7A]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

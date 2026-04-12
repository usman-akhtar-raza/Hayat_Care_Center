import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { homeCareAgencySummary, homeVerticalsDeepDive } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Home Care Agency | Hayat Care Centers",
  description:
    "Learn about Hayat home care agency services with personal care companionship meal support and flexible in home scheduling.",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";
const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";
const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

const careAtHomeFlow = [
  {
    title: "In home assessment",
    detail: "We review routines mobility and priorities in the actual home environment.",
  },
  {
    title: "Caregiver matching and schedule design",
    detail: "Hours and tasks are mapped to your family pace and level of support needed.",
  },
  {
    title: "Ongoing visits and quality check ins",
    detail: "Supervisors monitor consistency and adjust the plan as goals or health needs change.",
  },
] as const;

const serviceExamples = [
  "Personal care including bathing dressing and grooming support",
  "Companionship and conversation to reduce isolation at home",
  "Meal preparation hydration support and light housekeeping",
  "Medication reminders and routine prompts",
  "Errand and appointment coordination as part of the plan",
] as const;

const relatedPaths = [
  {
    title: "Adult care center",
    description: "Pair home visits with daytime center programming for more structure each week.",
    href: "/adult-care-center",
  },
  {
    title: "Non-medical transportation",
    description: "Arrange reliable rides to appointments errands and social visits.",
    href: "/non-medical-transportation",
  },
] as const;

export default function HomeCareAgencyPage() {
  return (
    <>
      <section className="hero-grid border-b border-slate-200">
        <div className={`${shell} py-16 md:py-20`}>
          <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
            <div data-reveal>
              <p className={sectionEyebrow}>{homeCareAgencySummary.eyebrow}</p>
              <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                In home care that supports independence without leaving families on their own
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">{homeCareAgencySummary.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Request home care information
                </Link>
                <Link href="/adult-care-center" className={btnOutline}>
                  Explore adult care center
                </Link>
              </div>
            </div>

            <div
              data-reveal
              data-reveal-delay={80}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md"
            >
              <Image
                src="/images/seniors/senior-home-care-01.jpg"
                alt="Home care agency caregiver supporting a client at home"
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
              <h2 className="text-2xl font-semibold text-slate-900">What support can look like at home</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                {serviceExamples.map((item) => (
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
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{homeVerticalsDeepDive.home.fitFor}</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-600">
                {homeCareAgencySummary.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D5664B]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60 py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className={sectionEyebrow}>
                Care process
              </p>
              <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                How home care starts and stays consistent
              </h2>
              <p data-reveal data-reveal-delay={70} className="mt-4 text-slate-600">
                We keep the setup process clear and practical so families know exactly what to expect from day one.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {careAtHomeFlow.map((step, index) => (
                <article
                  key={step.title}
                  data-reveal
                  data-reveal-delay={90 + index * 50}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-gold)]">Step {index + 1}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {homeVerticalsDeepDive.home.outcomes.map((outcome) => (
                <span
                  key={outcome}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700"
                >
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[1.05fr_0.95fr] md:p-9">
              <div data-reveal>
                <p className={sectionEyebrow}>Related services</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                  Add services as routines or health needs change
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  Home care can stand alone or connect with center based programs and transportation. We help families
                  sequence support in a way that is realistic and sustainable.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className={btnPrimary}>
                    Speak with a coordinator
                  </Link>
                  <Link href="/adult-care-center" className={btnOutline}>
                    Explore adult care center
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

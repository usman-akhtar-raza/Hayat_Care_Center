import type { Metadata } from "next";
import Link from "next/link";
import MovingBusScene from "@/components/non-medical/MovingBusScene";
import VerticalServiceHero from "@/components/VerticalServiceHero";
import { homeVerticalsDeepDive, nonMedicalTransportationSummary } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Non-Medical Transportation | Hayat Care Centers",
  description:
    "Review Hayat non medical transportation services for scheduled rides to appointments errands and community activities.",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";
const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";
const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

const transportUseCases = [
  "Medical appointments and therapy sessions",
  "Adult care center drop off and pickup support",
  "Pharmacy trips grocery errands and essential appointments",
  "Community and family visits that reduce isolation",
] as const;

const rideProcess = [
  {
    title: "Schedule and mobility details",
    detail: "We confirm timing destination mobility needs and preferred pickup instructions.",
  },
  {
    title: "Trip confirmation and dispatch",
    detail: "The ride is assigned and coordinated with care schedules when other Hayat services are involved.",
  },
  {
    title: "Day of ride communication",
    detail: "Families receive updates when timing changes so no one is left guessing.",
  },
] as const;

const relatedPaths = [
  {
    title: "Adult care center",
    description: "Pair transportation with center days for a complete daytime care routine.",
    href: "/adult-care-center",
  },
  {
    title: "Home care agency",
    description: "Coordinate rides with in home caregiver visits and appointments.",
    href: "/home-care-agency",
  },
] as const;

export default function NonMedicalTransportationPage() {
  return (
    <>
      <VerticalServiceHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our care", href: "/#our-verticals" },
          { label: "Non-medical transportation" },
        ]}
        title="Reliable rides for appointments errands and everyday independence"
        subtitle={nonMedicalTransportationSummary.title}
        description={nonMedicalTransportationSummary.body}
        primaryCta={{ label: "Request ride information", href: "/contact" }}
        secondaryCta={{ label: "Explore adult care center", href: "/adult-care-center" }}
        imageSrc="/hayat_transport.jpeg"
        imageAlt="Vehicle for scheduled non-medical transportation"
      />

      <section className="border-b border-slate-200 bg-white py-16 md:py-20">
        <div className={shell}>
          <div className={`${inner} grid gap-8 lg:grid-cols-2`}>
            <article data-reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-semibold text-slate-900">What transportation includes</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 md:text-base">
                {nonMedicalTransportationSummary.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                This is non emergency transport and not ambulance service
              </p>
            </article>

            <article
              data-reveal
              data-reveal-delay={70}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm md:p-8"
            >
              <h2 className="text-2xl font-semibold text-slate-900">Who this path fits best</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">{homeVerticalsDeepDive.transport.fitFor}</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-600">
                {transportUseCases.map((item) => (
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

      <section className="border-b border-slate-200 bg-slate-50/65 py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className={sectionEyebrow}>
                Ride visualization
              </p>
              <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                See how a day of transportation flows
              </h2>
              <p data-reveal data-reveal-delay={70} className="mt-4 text-slate-600">
                This animation shows the typical route pattern from home pickup to appointment and center dropoff, matching
                how our non medical transportation is scheduled.
              </p>
            </div>

            <div className="mt-10" data-reveal data-reveal-delay={100}>
              <MovingBusScene />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50/60 py-16 md:py-20">
        <div className={shell}>
          <div className={inner}>
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className={sectionEyebrow}>
                Scheduling flow
              </p>
              <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
                How ride coordination works
              </h2>
              <p data-reveal data-reveal-delay={70} className="mt-4 text-slate-600">
                We keep booking and day of communication straightforward so families can plan with confidence.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {rideProcess.map((step, index) => (
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
              {homeVerticalsDeepDive.transport.outcomes.map((outcome) => (
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
                  Transportation works best when aligned with the full care plan
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base">
                  You can use rides as a standalone service or pair them with center based programs and in home support
                  so schedules stay coordinated.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className={btnPrimary}>
                    Check ride availability
                  </Link>
                  <Link href="/contact" className={btnOutline}>
                    Talk with our team
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

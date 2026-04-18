import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AboutJourneyShowcase from "@/components/about/AboutJourneyShowcase";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { communityStats, contactDetails, trustPoints } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "About Us | Hayat Care Centers",
  description:
    "Learn how Hayat Care Centers combines an adult care center and home care agency to support young adults through older adults with dignity.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p data-reveal className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            About Hayat
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Care That Meets Families Where They Are—At Home Or At Our Center
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Hayat Care Centers serves young adults through older adults with two connected offerings: a welcoming adult care center for
            structured daytime support, and a home care agency for personalized help where someone already lives. Our
            approach blends practical assistance, clear communication, and hospitality so daily life feels steadier—not
            more complicated.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <AboutJourneyShowcase />

          {/* ── Visit Our Center ── */}
          <div
            data-reveal
            data-reveal-delay={40}
            className="mt-10 grid grid-cols-1 items-start gap-10 rounded-3xl bg-[var(--surface)] p-6 md:grid-cols-2 md:gap-0 md:p-10"
          >
            {/* Left column */}
            <div className="md:pr-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Our door is always open
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-playfair),serif] text-3xl font-bold leading-tight text-[var(--ink)] md:text-[2.5rem]">
                Visit Our{" "}
                <span className="text-[var(--brand-gold)]">Center</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--ink-soft)]">
                Walk in anytime during business hours for a{" "}
                <strong className="text-[var(--ink)]">free, no-pressure consultation</strong>.
                See our facility in person, meet the care team, and leave with a clear plan
                for your family.
              </p>

              {/* Info cards */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--ink)]">Hayat Care Center</p>
                    <p className="text-xs text-[var(--ink-soft)]">{contactDetails.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[var(--ink)]">Walk-In Hours</p>
                    <p className="text-xs text-[var(--ink-soft)]">Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p className="text-xs text-[var(--ink-soft)]">Weekends by appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white transition-shadow hover:shadow-lg"
                >
                  Get Directions
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="md:pl-10">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/usedimages/4.png"
                  alt="Hayat Care Center team and facility"
                  width={640}
                  height={400}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-playfair),serif] text-lg font-semibold text-[var(--ink)]">
                When You Visit, You Can:
              </h3>

              <div className="mt-4 divide-y divide-slate-200">
                {[
                  {
                    title: "Tour the facility in person",
                    text: "See the care spaces, activity rooms, and dining areas first-hand—photos can only show so much.",
                  },
                  {
                    title: "Meet the care team",
                    text: "Get personalized answers about daily routines, health support, and family communication directly from our staff.",
                  },
                  {
                    title: "Build a care plan on the spot",
                    text: "Bring your questions and we can outline next steps, whether that is adult day care, home support, or both.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-navy)] text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div>
                      <p className="text-sm font-bold text-[var(--ink)]">{item.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[var(--ink-soft)]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal>
            <ScrollFloat as="h2" containerClassName="text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">
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
                  <h3 className="text-xl font-bold text-[var(--ink)]">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{point.text}</p>
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

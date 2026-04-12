import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import ServicesRotatingGrid from "@/components/home/ServicesRotatingGrid";
import VerticalShowcaseCards from "@/components/home/VerticalShowcaseCards";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import {
  adultCareCenterSummary,
  communityStats,
  faqs,
  hayatBranches,
  homeCareAgencySummary,
  homeQuickLinks,
  nonMedicalTransportationSummary,
  homeTestimonialStories,
  homeVerticalsDeepDive,
  processSteps,
  services,
  trustPoints,
} from "@/data/siteContent";

const photoAdultCare = "/images/seniors/senior-care-center-01.jpg";
const photoNonMedicalTransport = "/images/transport/non-medical-bus.jpg";

const galleryStrip = [
  {
    src: "/images/seniors/senior-care-center-02.jpg",
    alt: "Senior participant receiving a warm welcome at the care center",
    title: "Warm daily welcome",
    subtitle: "A calm and respectful start to every visit.",
  },
  {
    src: "/images/seniors/senior-activity-01.jpg",
    alt: "Older adults participating in social daytime activities",
    title: "Purposeful activity",
    subtitle: "Engagement and connection throughout the day.",
  },
  {
    src: "/images/seniors/senior-home-care-01.jpg",
    alt: "Caregiver assisting an older adult during a home care visit",
    title: "Compassionate home support",
    subtitle: "Personalized care that keeps routines steady.",
  },
] as const;

const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--brand-gold-bright)]";
const btnOutline =
  "inline-flex items-center justify-center rounded-full border-2 border-[#073D7A] bg-[#073D7A] px-6 py-3 text-sm font-semibold text-white transition hover:border-[#052a52] hover:bg-[#052a52]";

const sectionEyebrow = "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

/** Same outer width + gutters as `HeroSection`. */
const homeShell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
/** Main content column: centered with max width. */
const homeInner = "mx-auto w-full max-w-7xl";
/** Centered intro block (eyebrow + title + blurb) above grids. */
const sectionIntro = "mx-auto max-w-3xl text-center";

export default function Home() {
  const [featuredStory, ...moreStories] = homeTestimonialStories;
  const faqPreview = faqs.slice(0, 4);

  return (
    <div className="home-theme-page">
      <HeroSection />

      <section className="home-surface-soft border-b border-slate-200 py-10 md:py-12">
        <div className={homeShell}>
          <div className={`${homeInner} grid gap-3 sm:grid-cols-2 lg:grid-cols-4`}>
            {communityStats.map((stat) => (
              <div
                key={stat.label}
                data-reveal
                className="rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-sm"
              >
                <p className="text-xl font-bold tabular-nums text-slate-900">{stat.value}</p>
                <p className="mt-1 text-xs font-medium leading-snug text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="adult-day-center" className="home-surface-warm scroll-mt-24 border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={`${homeInner} grid items-center gap-12 md:grid-cols-2 md:gap-14`}>
          <div data-reveal>
            <p className={sectionEyebrow}>{adultCareCenterSummary.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              {adultCareCenterSummary.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{adultCareCenterSummary.body}</p>
            <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-600">
              {adultCareCenterSummary.bullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={btnPrimary}>
                Plan a center visit
              </Link>
              <Link href="/amenities" className={btnOutline}>
                Amenities
              </Link>
            </div>
          </div>
          <div data-reveal data-reveal-delay={80} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
            <Image
              src={photoAdultCare}
              alt="Adult care center at Hayat"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Deep dive: three verticals */}
      <section id="our-verticals" className="home-surface-feature scroll-mt-24 border-b border-slate-200 py-16 md:py-24">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              {homeVerticalsDeepDive.eyebrow}
            </p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              {homeVerticalsDeepDive.title}
            </h2>
            <p data-reveal data-reveal-delay={80} className="mt-4 text-base leading-relaxed text-slate-600">
              {homeVerticalsDeepDive.intro}
            </p>
          </div>

          <div>
            <VerticalShowcaseCards
              items={[
                {
                  index: "01",
                  title: homeVerticalsDeepDive.adult.name,
                  tagline: homeVerticalsDeepDive.adult.tagline,
                  description: homeVerticalsDeepDive.adult.fitFor,
                  href: "/#adult-day-center",
                  imageSrc: "/images/seniors/senior-care-center-01.jpg",
                  imageAlt: "Adult care center at Hayat",
                },
                {
                  index: "02",
                  title: homeVerticalsDeepDive.home.name,
                  tagline: homeVerticalsDeepDive.home.tagline,
                  description: homeVerticalsDeepDive.home.fitFor,
                  href: "/#home-care-agency",
                  imageSrc: "/images/seniors/senior-home-care-01.jpg",
                  imageAlt: "Home care support at Hayat",
                },
                {
                  index: "03",
                  title: homeVerticalsDeepDive.transport.name,
                  tagline: homeVerticalsDeepDive.transport.tagline,
                  description: homeVerticalsDeepDive.transport.fitFor,
                  href: "/#non-medical-transportation",
                  imageSrc: photoNonMedicalTransport,
                  imageAlt:
                    "Comfortable passenger vehicle interior — non-medical transportation for appointments and errands",
                },
              ]}
            />
          </div>
          </div>
        </div>
      </section>

      {/* Branches / locations */}
      <section className="home-surface-cool border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              Locations & branches
            </p>
            <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Where to find Hayat
            </h2>
            <p data-reveal data-reveal-delay={70} className="mt-3 text-slate-600">
              Three front doors, one organization—center-based care, home care coordination, and enrollment support. Update
              city names and service areas anytime in your content file to match your real map.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hayatBranches.map((branch, index) => (
              <article
                key={branch.name}
                data-reveal
                data-reveal-delay={80 + index * 60}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{branch.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--brand-gold)]">{branch.area}</p>
                <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-600">
                  {branch.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Link href={branch.href} className={`${btnPrimary} mt-6 w-full sm:w-auto`}>
                  {branch.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="home-surface-soft border-b border-slate-200 py-14 md:py-16">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              Quick paths
            </p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl"
            >
              Where to next
            </h2>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {homeQuickLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                data-reveal
                data-reveal-delay={60 + index * 40}
                className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
              >
                <span className="text-sm font-bold text-slate-900 group-hover:text-[var(--brand-gold)]">{item.title}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-slate-600">{item.description}</span>
              </Link>
            ))}
          </div>
          </div>
        </div>
      </section>
      <section id="home-care-agency" className="home-surface-cool scroll-mt-24 border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={`${homeInner} grid items-center gap-12 md:grid-cols-2 md:gap-14`}>
          <div data-reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md md:order-1">
            <Image
              src="/images/seniors/senior-home-care-01.jpg"
              alt="Home care support"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div data-reveal data-reveal-delay={80} className="order-1 md:order-2">
            <p className={sectionEyebrow}>{homeCareAgencySummary.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              {homeCareAgencySummary.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{homeCareAgencySummary.body}</p>
            <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-600">
              {homeCareAgencySummary.bullets.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={btnPrimary}>
                Home care info
              </Link>
              <Link href="/adult-care-center" className={btnOutline}>
                Adult care center
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section id="non-medical-transportation" className="home-surface-warm scroll-mt-24 border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={`${homeInner} grid items-center gap-12 md:grid-cols-2 md:gap-14`}>
            <div data-reveal data-reveal-delay={80}>
              <p className={sectionEyebrow}>{nonMedicalTransportationSummary.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                {nonMedicalTransportationSummary.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">{nonMedicalTransportationSummary.body}</p>
              <ul className="mt-6 space-y-2.5 text-sm leading-6 text-slate-600">
                {nonMedicalTransportationSummary.bullets.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Request ride information
                </Link>
                <Link href="/home-care-agency" className={btnOutline}>
                  Home care agency
                </Link>
              </div>
            </div>
            <div data-reveal className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md">
              <Image
                src={photoNonMedicalTransport}
                alt="Transit vehicle interior representing scheduled non-medical transportation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="home-surface-cool border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              Services
            </p>
            <div data-reveal data-reveal-delay={50}>
              <ScrollFloat
                as="h2"
                containerClassName="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl"
                textClassName="text-balance"
              >
                From companionship to personal care
              </ScrollFloat>
            </div>
            <p data-reveal data-reveal-delay={90} className="mt-3 text-sm leading-relaxed text-slate-600">
              Center-based days or visits at home—delivered with clear communication and respect for your routine.
            </p>
          </div>
          <ServicesRotatingGrid services={services} />
          </div>
        </div>
      </section>

      <section className="home-surface-soft border-b border-slate-200 py-14 md:py-16">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              Why Hayat
            </p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl"
            >
              Care that still feels human
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {trustPoints.map((item, index) => (
              <div
                key={item.title}
                data-reveal
                data-reveal-delay={index * 60}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Journey / steps */}
      <section className="home-surface-feature border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              How it works
            </p>
            <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              From first call to a steady routine
            </h2>
            <p data-reveal data-reveal-delay={70} className="mt-3 text-slate-600">
              Whether you lean toward the center or home care, the first conversations look similar: we listen, clarify goals,
              and map a realistic path—without pressure to decide on the spot.
            </p>
          </div>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                data-reveal
                data-reveal-delay={100 + index * 80}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 pt-10 shadow-sm"
              >
                <span className="absolute left-6 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand-gold)] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{step.step}</p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.detail}</p>
              </li>
            ))}
          </ol>
          <div data-reveal data-reveal-delay={260} className="mt-10 flex justify-center">
            <Link href="/contact" className={btnOutline}>
              Book a consultation
            </Link>
          </div>
          </div>
        </div>
      </section>

      <section className="home-surface-warm border-b border-slate-200 py-12 md:py-16">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 lg:gap-10">
            {galleryStrip.map((img, index) => (
              <div
                key={img.src}
                data-reveal
                data-reveal-delay={index * 70}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-contain object-center transition-transform duration-300 ease-out motion-reduce:transition-none md:group-hover:scale-[1.012] motion-reduce:md:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 min-h-[5.25rem] bg-gradient-to-t from-slate-950/78 via-slate-950/25 to-transparent px-3 pb-3 pt-10 transition-opacity duration-300 ease-out motion-reduce:transition-none opacity-100 md:opacity-0 md:group-hover:opacity-100 motion-reduce:md:opacity-100"
                  aria-hidden
                >
                  <div className="transition-transform duration-300 ease-out motion-reduce:transition-none translate-y-0 md:translate-y-1 md:group-hover:translate-y-0 motion-reduce:md:translate-y-0">
                    <p className="text-sm font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                      {img.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-white/92 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                      {img.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* Long testimonials */}
      <section className="home-surface-feature border-b border-slate-200 py-16 md:py-24">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              Testimonials
            </p>
            <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Stories from families and participants
            </h2>
            <p data-reveal data-reveal-delay={70} className="mt-3 text-slate-600">
              Longer reflections—not just one-liners—so you can see how Hayat shows up when routines, health, and emotions
              are all in play.
            </p>
          </div>

          {featuredStory && (
            <figure
              data-reveal
              data-reveal-delay={100}
              className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
            >
              <div className="grid lg:grid-cols-[1fr_1.15fr]">
                <div className="bg-gradient-to-br from-[var(--brand-gold)]/20 to-amber-50/90 p-8 md:p-10 lg:p-12">
                  <blockquote className="font-[family-name:var(--font-playfair),serif] text-2xl font-medium leading-snug text-slate-900 md:text-3xl">
                    &ldquo;{featuredStory.quote}&rdquo;
                  </blockquote>
                </div>
                <div className="flex flex-col justify-center border-t border-slate-200 p-8 md:p-10 lg:border-t-0 lg:border-l lg:border-slate-200">
                  <p className="text-sm leading-7 text-slate-600">{featuredStory.story}</p>
                  <figcaption className="mt-6 border-t border-slate-100 pt-6">
                    <cite className="not-italic text-base font-bold text-slate-900">{featuredStory.name}</cite>
                    <span className="mt-1 block text-sm text-slate-500">{featuredStory.role}</span>
                  </figcaption>
                </div>
              </div>
            </figure>
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {moreStories.map((t, index) => (
              <blockquote
                key={t.name}
                data-reveal
                data-reveal-delay={120 + index * 50}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{t.story}</p>
                <footer className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>

          <div data-reveal data-reveal-delay={200} className="mt-12 flex justify-center">
            <Link href="/testimonials" className={btnOutline}>
              View all testimonials
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="home-surface-soft border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className="mx-auto w-full max-w-3xl">
          <div className={sectionIntro}>
            <p data-reveal className={sectionEyebrow}>
              FAQ
            </p>
            <h2 data-reveal data-reveal-delay={40} className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Questions we hear often
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqPreview.map((item, index) => (
              <details
                key={item.q}
                data-reveal
                data-reveal-delay={60 + index * 40}
                className="group rounded-xl border border-slate-200 bg-slate-50/40 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none px-5 py-4 text-sm font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-3">
                    {item.q}
                    <span className="text-[var(--brand-gold)] transition group-open:rotate-180" aria-hidden>
                      ▼
                    </span>
                  </span>
                </summary>
                <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
          <p data-reveal data-reveal-delay={220} className="mt-8 flex justify-center">
            <Link href="/faq" className={`${btnPrimary} inline-flex`}>
              See full FAQ
            </Link>
          </p>
          </div>
        </div>
      </section>

      <section className="home-surface-warm border-t border-slate-200 py-14 md:py-16">
        <div className={homeShell}>
          <div className={homeInner}>
          <div className={sectionIntro}>
          <h2 className="text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">Next step</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Center care, home care, or both—we will point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-8 py-3 text-sm font-bold text-white hover:bg-[var(--brand-gold-bright)]"
            >
              Contact us
            </Link>
            <Link href="/faq" className={btnOutline}>
              FAQ
            </Link>
          </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

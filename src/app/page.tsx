import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import CommunityStatsMarquee from "@/components/home/CommunityStatsMarquee";
import HomeTestimonialsShowcase from "@/components/home/HomeTestimonialsShowcase";
import ServicesRotatingGrid from "@/components/home/ServicesRotatingGrid";
import VerticalShowcaseCards from "@/components/home/VerticalShowcaseCards";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import {
  adultCareCenterSummary,
  communityStats,
  contactDetails,
  faqs,
  hayatLocationSectionIntro,
  hayatPrimaryLocation,
  homeCareAgencySummary,
  homeQuickLinks,
  homeQuickPathsIntro,
  nonMedicalTransportationSummary,
  homeTestimonialStories,
  homeVerticalsDeepDive,
  processSteps,
  services,
  trustPoints,
} from "@/data/siteContent";

const photoAdultCare = "/images/usedimages/adultcare.png";
const photoHomeCare = "/images/usedimages/homcare.png";
const photoNonMedicalTransport = "/images/usedimages/transportation.png";

const galleryStrip = [
  {
    src: "/images/home/georg-arthur-pflueger-TeWwYARfcM4-unsplash.jpg",
    alt: "Caregiver helping an older adult use a smartphone",
    title: "Digital connection support",
    subtitle: "Helping seniors stay in touch with family and services.",
  },
  {
    src: "/images/home/nappy-dcBO4nt4MRE-unsplash.jpg",
    alt: "Clinician checking an older adults blood pressure",
    title: "Everyday health monitoring",
    subtitle: "Routine checks and attentive care in a calm setting.",
  },
  {
    src: "/images/home/age-cymru-IkfMxGU3yLc-unsplash.jpg",
    alt: "Older adult and caregiver sharing a dance in a group activity room",
    title: "Joyful social activities",
    subtitle: "Movement and connection that make each day meaningful.",
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

      <CommunityStatsMarquee items={communityStats} />
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
                  imageSrc: photoAdultCare,
                  imageAlt: "Adult care center at Hayat",
                },
                {
                  index: "02",
                  title: homeVerticalsDeepDive.home.name,
                  tagline: homeVerticalsDeepDive.home.tagline,
                  description: homeVerticalsDeepDive.home.fitFor,
                  href: "/#home-care-agency",
                  imageSrc: photoHomeCare,
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
          <div data-reveal data-reveal-delay={80} className="relative aspect-[3/2] overflow-hidden rounded-2xl  bg-white ">
          <Image
              src="/images/full.png"
              alt="Adult care center at Hayat"
            fill
              className="object-cover bg-white"
              sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
          </div>
        </div>
      </section>
      <section id="home-care-agency" className="home-surface-cool scroll-mt-24 border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={`${homeInner} grid items-center gap-12 md:grid-cols-2 md:gap-14`}>
          <div data-reveal className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md md:order-1">
            <Image
              src="/images/seniors/age-cymru-2obyM4zYt3Y-unsplash.jpg"
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
                alt="Vehicle in motion representing scheduled non medical transportation rides"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
                  </div>
              </div>
        </div>
      </section>

    

      {/* Single location — map + community card */}
      <section className="home-surface-cool border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={homeInner}>
            <div className={sectionIntro}>
              <p data-reveal className={sectionEyebrow}>
                Locations & branches
              </p>
              <h2
                data-reveal
                data-reveal-delay={40}
                className="mt-4 font-[family-name:var(--font-playfair),serif] text-3xl font-semibold leading-[1.15] tracking-tight text-[#073d7a] md:text-[2.5rem]"
              >
                Where to find Hayat
              </h2>
              <p
                data-reveal
                data-reveal-delay={70}
                className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:mx-auto md:text-base"
              >
                {hayatLocationSectionIntro}
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              <div
                data-reveal
                data-reveal-delay={90}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <iframe
                  title="Hayat care center location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-89.72%2C39.72%2C-89.57%2C39.85&layer=mapnik&marker=39.7817%2C-89.6501"
                  className="h-[290px] w-full md:h-[360px]"
                  loading="lazy"
                />
              </div>

              <article
                data-reveal
                data-reveal-delay={130}
                className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Communities We Serve</h3>
                <div className="mt-5 rounded-xl border border-[#3152b7]/20 bg-[#3152b7] p-4 text-white shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span
                        aria-hidden
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold"
                      >
                        ✓
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold">{hayatPrimaryLocation.name}</p>
                        <p className="mt-0.5 text-xs text-blue-100">{hayatPrimaryLocation.area}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
                      HQ
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{contactDetails.address}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate-600">
                  {hayatPrimaryLocation.lines.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-gold)]" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#e8eefc] px-3 py-1 text-xs font-semibold text-[#3152b7]">
                    {hayatPrimaryLocation.name}
                  </span>
                </div>

                <Link href={hayatPrimaryLocation.href} className={`${btnPrimary} mt-7 w-full justify-center text-center`}>
                  {hayatPrimaryLocation.ctaLabel}
                </Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="home-surface-soft border-b border-slate-200 py-16 md:py-20">
        <div className={homeShell}>
          <div className={homeInner}>
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1px_1fr] md:gap-0">

              {/* ── Left column: heading + text + image ── */}
              <div data-reveal className="md:pr-10 lg:pr-14">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-slate-300 select-none" aria-hidden>
                  WHY
                </p>
                <h2 className="mt-1 font-[family-name:var(--font-playfair),serif] text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-[2.5rem]">
                   Hayat Care<span className="text-[var(--brand-gold)]"> Center</span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                  Hayat Care Centers is a Springfield-based care provider
                  supporting older adults and their families across the
                  region. From our adult day center to home care and
                  non-medical transportation, every service is built around
                  dignity, consistency, and genuine human connection.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  We pair attentive daily support with enrichment programs,
                  chef-guided meals, and a team that treats residents the way
                  they would treat their own family. Whether it is center-based
                  days or visits at home, we show up prepared and we follow
                  through.
                </p>

                <div data-reveal data-reveal-delay={120} className="relative mt-8 overflow-hidden rounded-2xl">
                  <Image
                    src="/images/full.png"
                    alt="Hayat Care Centers community building"
                    width={600}
                    height={400}
                    className="h-auto w-full rounded-2xl object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                    <span className="flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                    <span className="text-xs font-bold text-slate-800">Trusted Community Care</span>
                  </div>
                </div>
              </div>

              {/* ── Vertical divider (visible md+) ── */}
              <div className="hidden self-stretch bg-slate-200 md:block" />

              {/* ── Right column: stacked feature items ── */}
              <div className="md:pl-10 lg:pl-14">
                <div className="divide-y divide-slate-200">
                  {homeQuickLinks.map((item, index) => (
                    <Link
                      key={`${item.href}-${item.title}`}
                      href={item.href}
                      data-reveal
                      data-reveal-delay={60 + index * 50}
                      className="group block py-5 first:pt-0 last:pb-0"
                    >
                      <h3 className="text-base font-bold text-slate-900 transition-colors group-hover:text-[var(--brand-gold)] md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

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

      <HomeTestimonialsShowcase featured={featuredStory} stories={moreStories} />

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

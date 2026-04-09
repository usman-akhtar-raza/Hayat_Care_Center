import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import DomeGallery from "@/components/reactbits/DomeGallery";
import GooeyNav from "@/components/reactbits/GooeyNav";
import LogoLoop, { type LogoItem } from "@/components/reactbits/LogoLoop";
import PixelCard from "@/components/reactbits/PixelCard";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import Threads from "@/components/reactbits/Threads";
import {
  communityStats,
  contactDetails,
  floorPlans,
  homeFeatureCards,
  homeQuickLinks,
  services,
} from "@/data/siteContent";

const trustLogos: LogoItem[] = [
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
        Family-First Care
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
        24/7 Support
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-orange)]">
        Wellness-Led Living
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-navy)]">
        Enrichment Programs
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)]">
        Hospitality Dining
      </span>
    ),
  },
  {
    node: (
      <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-orange)]">
        Trusted By Families
      </span>
    ),
  },
];

const gooeyNavItems = [
  { label: "Hero", href: "#home-hero" },
  { label: "Why Hayat", href: "#why-hayat" },
  { label: "Dome Gallery", href: "#dome-gallery" },
  { label: "Floor Plans", href: "#floor-plans-home" },
  { label: "Support", href: "#assisted-support-home" },
  { label: "Contact", href: "/contact" },
];

const domeGalleryImages = [
  {
    src: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
    alt: "Community reception lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern care space",
  },
  {
    src: "https://images.unsplash.com/photo-1617201929473-5f3644f8f5d5?auto=format&fit=crop&w=1400&q=80",
    alt: "Dining and social hall",
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    alt: "Resident lounge seating",
  },
  {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    alt: "Wellness and mobility studio",
  },
  {
    src: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80",
    alt: "Outdoor courtyard walkway",
  },
  {
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Quiet reading room",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
    alt: "Resident suite interior",
  },
];

const heroShowcaseImage =
  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1800&q=80";

export default function Home() {
  return (
    <>
      <section id="home-hero" className="hero-grid relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-55">
          <Threads
            amplitude={1.1}
            distance={0.18}
            color={[0.2, 0.5, 0.84]}
            enableMouseInteraction={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-8 lg:pt-10">
          <div
            data-reveal
            className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-soft)] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.3)]"
          >
            <div
              role="img"
              aria-label="Welcoming Hayat community care environment"
              className="h-[220px] rounded-[1.4rem] bg-cover bg-center sm:h-[300px] lg:h-[360px]"
              style={{ backgroundImage: `url("${heroShowcaseImage}")` }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-8 grid max-w-7xl items-center gap-8 px-4 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div>
            <p
              data-reveal
              className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]"
            >
              Hayat Care Center
            </p>
            <div data-reveal data-reveal-delay={90}>
              <ScrollFloat
                as="h1"
                containerClassName="mt-3 max-w-4xl text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl lg:text-6xl"
                textClassName="text-balance"
              >
                Assisted Support In A Community Designed For Comfort,
                Connection, And Everyday Ease
              </ScrollFloat>
            </div>
            <p
              data-reveal
              data-reveal-delay={180}
              className="mt-5 max-w-2xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
            >
              Explore Hayat&apos;s amenities, dining, life enrichment, assisted
              support, floor plans, and move-in guidance through a clearer
              community-style website experience.
            </p>
            <div
              data-reveal
              data-reveal-delay={260}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
              >
                Schedule A Tour
              </Link>
              <a
                href={contactDetails.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--brand-navy)]"
              >
                Call {contactDetails.phoneLabel}
              </a>
            </div>
          </div>

          <BorderGlow
            data-reveal
            data-reveal-delay={140}
            borderRadius={24}
            glowRadius={30}
            className="h-full"
          >
            <aside data-tilt className="h-full rounded-3xl bg-white p-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Quick Navigation
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--ink)]">
                Browse The Community
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {homeQuickLinks.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-2xl bg-white px-4 py-4 ring-1 ring-[var(--line)] transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="block text-sm font-semibold text-[var(--ink)]">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-[var(--ink-soft)]">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {communityStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-[var(--bg)] px-4 py-4 ring-1 ring-[var(--line)]"
                  >
                    <p className="text-2xl font-bold text-[var(--brand-navy)]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[var(--ink-soft)]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </BorderGlow>
        </div>
      </section>

      <section className="bg-white py-9">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Trusted Community Priorities
          </p>
          <LogoLoop
            className="mt-4"
            logos={trustLogos}
            speed={66}
            gap={18}
            logoHeight={16}
            fadeOut
            scaleOnHover
            ariaLabel="Key Hayat community strengths"
          />
        </div>
      </section>

      {/* <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <BorderGlow data-reveal borderRadius={22} glowRadius={28}>
            <div className="rounded-3xl bg-white p-6 md:p-7">
              <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
                Gooey Navigation
              </p>
              <div className="mt-4 overflow-x-auto pb-2">
                <GooeyNav
                  items={gooeyNavItems}
                  className="mx-auto min-w-max [--color-1:#2f7ec9] [--color-2:#5aa9df] [--color-3:#d87443] [--color-4:#153f73]"
                />
              </div>
            </div>
          </BorderGlow>
        </div>
      </section> */}

      <section id="why-hayat" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Why Hayat
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
              textClassName="text-balance"
            >
              A More Complete Community Experience
            </ScrollFloat>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {homeFeatureCards.map((item, index) => (
              <div key={item.title} data-reveal data-reveal-delay={index * 90}>
                <PixelCard
                  variant={index === 0 ? "blue" : index === 1 ? "yellow" : "default"}
                  className="[--pc-width:100%] [--pc-height:320px] bg-[var(--surface)]"
                >
                  <article className="flex h-full flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                      {item.text}
                    </p>
                  </article>
                </PixelCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="dome-gallery" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Dome Gallery
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-4xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
              textClassName="text-balance"
            >
              Walk Through Hayat Spaces In A 3D Dome View
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={120}
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[var(--ink-soft)]"
          >
            Drag to explore featured community spaces including reception,
            dining, lounges, suites, and wellness areas.
          </p>

          <BorderGlow
            data-reveal
            data-reveal-delay={180}
            borderRadius={26}
            glowRadius={30}
            className="mt-8 overflow-hidden"
          >
            <div className="h-[420px] rounded-3xl bg-white md:h-[540px]">
              <DomeGallery
                images={domeGalleryImages}
                fit={0.43}
                fitBasis="max"
                minRadius={420}
                maxRadius={900}
                padFactor={0.2}
                overlayBlurColor="rgba(15, 28, 47, 0.85)"
                openedImageWidth="340px"
                openedImageHeight="440px"
                imageBorderRadius="20px"
                openedImageBorderRadius="22px"
                grayscale={false}
              />
            </div>
          </BorderGlow>
        </div>
      </section>

      <section id="floor-plans-home" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                data-reveal
                className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
              >
                Floor Plans
              </p>
              <div data-reveal data-reveal-delay={70}>
                <ScrollFloat
                  as="h2"
                  containerClassName="mt-3 text-3xl font-bold text-[var(--ink)] md:text-4xl"
                >
                  Compare Suite Styles
                </ScrollFloat>
              </div>
            </div>
            <div data-reveal data-reveal-delay={120}>
              <Link
                href="/floor-plans"
                className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                View All Floor Plans
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {floorPlans.map((plan, index) => (
              <BorderGlow
                key={plan.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                borderRadius={22}
                glowRadius={28}
                className="h-full"
              >
                <article className="h-full rounded-3xl bg-[var(--bg)] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--brand-orange)]">
                    {plan.layout}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--ink)]">
                    {plan.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--brand-blue)]">
                    {plan.size}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                    {plan.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-[var(--ink-soft)]">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-orange)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section id="assisted-support-home" className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Assisted Support
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
              textClassName="text-balance"
            >
              Practical Help That Preserves Independence
            </ScrollFloat>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => (
              <BorderGlow
                key={service.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                borderRadius={18}
                glowRadius={26}
                className="h-full"
              >
                <article className="h-full rounded-2xl p-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg)] text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
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
          <div data-reveal data-reveal-delay={220} className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore Care Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

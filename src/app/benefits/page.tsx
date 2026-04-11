import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import BorderGlow from "@/components/reactbits/BorderGlow";
import BenefitsTimeline from "@/components/benefits/BenefitsTimeline";
import BenefitsHero from "@/components/benefits/BenefitsHero";
import {
  type LucideIcon,
  Palette,
  Dumbbell,
  MapPinned,
  Sparkles,
  UsersRound,
  ShieldCheck,
  HandHelping,
  Pill,
  SprayCan,
  Bus,
} from "lucide-react";
import {
  benefitHighlights,
  mealBenefits,
  lifestyleBenefits,
  benefitsCta,
} from "@/data/siteContent";

const lifestyleIconMap: Record<string, LucideIcon> = {
  Palette,
  Dumbbell,
  MapPinned,
  Sparkles,
  UsersRound,
  ShieldCheck,
};

const includedServiceItems: ReadonlyArray<{
  title: string;
  text: string;
  icon: LucideIcon;
}> = [
  {
    title: "Personal Care Assistance",
    text: "Bathing, dressing, grooming, and toileting support delivered with dignity and patience.",
    icon: HandHelping,
  },
  {
    title: "Medication Management",
    text: "Structured reminders, observation, and coordination with pharmacies and physicians.",
    icon: Pill,
  },
  {
    title: "Housekeeping & Laundry",
    text: "Clean living spaces and fresh linens so residents can focus on enjoying community life.",
    icon: SprayCan,
  },
  {
    title: "Scheduled Transportation",
    text: "Rides to medical appointments, errands, and community outings—coordinated and dependable.",
    icon: Bus,
  },
];

export const metadata: Metadata = {
  title: "Benefits | Hayat Care Centers",
  description:
    "Discover the full range of benefits at Hayat Care Centers—meals, activities, wellness, companionship, and family peace of mind.",
};

const sectionEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]";

export default function BenefitsPage() {
  return (
    <div className="bg-white">
      {/* ── Hero — full image with animated heading ── */}
      <BenefitsHero />

      {/* ── Highlight stats — timeline scroll ── */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p data-reveal className={sectionEyebrow}>At a glance</p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              The numbers that shape daily life
            </h2>
            <p data-reveal data-reveal-delay={80} className="mt-4 text-base leading-relaxed text-slate-600">
              Scroll through the milestones that define every day at Hayat — each one earned, not promised.
            </p>
          </div>

          <div className="mt-14">
            <BenefitsTimeline items={benefitHighlights} />
          </div>
        </div>
      </section>

      {/* ── Meals section with image ── */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50/90 to-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div
              data-reveal
              className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 shadow-md"
            >
              <Image
                src="/images/home/gallery-dining-social.jpg"
                alt="Residents enjoying a chef-prepared meal together in the Hayat dining room"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
            </div>

            <div data-reveal data-reveal-delay={80}>
              <p className={sectionEyebrow}>Nutrition & dining</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
                Meals that nourish body and spirit
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Every meal at Hayat is an opportunity for comfort, connection, and good nutrition.
                Our culinary team plans menus that respect dietary needs, cultural preferences, and
                the simple pleasure of eating well together.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {mealBenefits.map((item, i) => (
                  <div
                    key={item.title}
                    data-reveal
                    data-reveal-delay={120 + i * 50}
                    className="benefit-meal-item rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lifestyle & enrichment grid ── */}
      <section className="border-b border-slate-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p data-reveal className={sectionEyebrow}>Lifestyle & enrichment</p>
            <div data-reveal data-reveal-delay={50}>
              <ScrollFloat
                as="h2"
                containerClassName="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl"
                textClassName="text-balance"
              >
                More than care—a life worth enjoying
              </ScrollFloat>
            </div>
            <p data-reveal data-reveal-delay={100} className="mt-4 text-base leading-relaxed text-slate-600">
              Hayat fills each week with purpose, creativity, movement, and connection so residents
              feel engaged—not just looked after.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lifestyleBenefits.map((item, index) => {
              const LifestyleIcon = lifestyleIconMap[item.lucideIcon] ?? Sparkles;

              return (
                <SpotlightCard
                  key={item.title}
                  className="h-full rounded-2xl border border-slate-200 bg-white"
                  spotlightColor="rgba(213, 102, 75, 0.10)"
                >
                  <div
                    data-reveal
                    data-reveal-delay={index * 60}
                    className="flex h-full flex-col p-6"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--brand-navy)] to-[var(--brand-sky)] text-white shadow-sm">
                      <LifestyleIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full-width image break ── */}
      <section className="relative h-64 overflow-hidden border-b border-slate-200 sm:h-80 md:h-96">
        <Image
          src="/images/home/gallery-outdoor-spaces.jpg"
          alt="Outdoor walking paths and garden spaces at Hayat Care Centers"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#073d7a]/70 via-[#073d7a]/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4">
            <p
              data-reveal
              className="max-w-lg font-[family-name:var(--font-playfair),serif] text-2xl font-semibold leading-snug text-white drop-shadow-lg md:text-3xl lg:text-4xl"
            >
              A place where every day feels purposeful, connected, and safe.
            </p>
          </div>
        </div>
      </section>

      {/* ── Included services summary with BorderGlow ── */}
      <section className="border-b border-slate-200 bg-slate-50/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p data-reveal className={sectionEyebrow}>What&apos;s included</p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-3 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              Services built into every plan
            </h2>
            <p data-reveal data-reveal-delay={80} className="mt-4 text-base leading-relaxed text-slate-600">
              No hidden fees or surprise add-ons. These services are woven into the Hayat experience
              from day one.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {includedServiceItems.map((item, index) => {
              const ServiceIcon = item.icon;

              return (
                <BorderGlow
                  key={item.title}
                  data-reveal
                  data-reveal-delay={index * 70}
                  data-tilt
                  className="h-full"
                  borderRadius={16}
                  glowRadius={24}
                >
                  <article className="flex h-full flex-col rounded-2xl bg-white p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                      <ServiceIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </article>
                </BorderGlow>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery strip ── */}
      <section className="border-b border-slate-200 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { src: "/images/home/gallery-reception.jpg", alt: "Welcoming reception at Hayat", caption: "Warm welcomes" },
              { src: "/images/home/gallery-comfortable-lounge.jpg", alt: "Comfortable community lounge", caption: "Comfortable living" },
              { src: "/images/home/gallery-wellness-programs.jpg", alt: "Wellness programs in action", caption: "Active wellness" },
            ].map((img, index) => (
              <div
                key={img.src}
                data-reveal
                data-reveal-delay={index * 80}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent px-4 pb-4 pt-12 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 motion-reduce:md:opacity-100">
                  <p className="text-sm font-semibold text-white drop-shadow">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-br from-[#073d7a] to-[#0a4a8f] py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2
            data-reveal
            className="font-[family-name:var(--font-playfair),serif] text-3xl font-semibold leading-snug md:text-4xl"
            style={{ color: "#D5664B" }}
          >
            {benefitsCta.title}
          </h2>
          <p data-reveal data-reveal-delay={60} className="mt-4 text-base leading-relaxed text-white/85">
            {benefitsCta.text}
          </p>
          <div data-reveal data-reveal-delay={120} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-gold)] px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[var(--brand-gold-bright)]"
            >
              Schedule a tour
            </Link>
            <Link
              href="/amenities"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View amenities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

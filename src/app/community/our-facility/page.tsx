import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import CircularGallery from "@/components/reactbits/CircularGallery";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { facilitySpaces } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Our Facility | Hayat Care Center",
  description: "Explore the thoughtfully designed spaces at Hayat Care Center, from the lobby and dining hall to wellness studios and garden courtyards.",
};

const facilityGalleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=80",
    text: "Reception Lobby",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    text: "Care Hallway",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617201929473-5f3644f8f5d5?auto=format&fit=crop&w=1400&q=80",
    text: "Dining Area",
  },
  {
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
    text: "Resident Lounge",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80",
    text: "Wellness Studio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1400&q=80",
    text: "Garden Courtyard",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
    text: "Suite Interior",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    text: "Quiet Reading Room",
  },
];

export default function OurFacilityPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Our Facility
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Spaces Designed For Comfort, Connection, And Everyday Living
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Every area of Hayat Care Center has been thoughtfully planned to
            feel welcoming, functional, and warm. From the moment you walk
            through the front doors, the setting reflects a commitment to
            hospitality and resident well-being.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <p
            data-reveal
            className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Facility Gallery
          </p>
          <div data-reveal data-reveal-delay={70}>
            <ScrollFloat
              as="h2"
              containerClassName="mx-auto mt-3 max-w-4xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              Explore Hayat Spaces Through A Circular Gallery
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={120}
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[var(--ink-soft)]"
          >
            Drag across the gallery to browse core spaces in the community,
            including reception, dining, wellness, and resident lounges.
          </p>

          <BorderGlow
            data-reveal
            data-reveal-delay={180}
            className="mt-8 overflow-hidden"
            borderRadius={26}
            glowRadius={30}
          >
            <div className="h-[420px] rounded-3xl bg-white p-3 md:h-[520px] md:p-4">
              <CircularGallery
                items={facilityGalleryItems}
                bend={2.6}
                textColor="#d7e5fb"
                borderRadius={0.06}
                scrollSpeed={2.2}
                scrollEase={0.06}
              />
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div data-reveal>
            <ScrollFloat
              as="h2"
              containerClassName="text-center text-3xl font-bold text-[var(--ink)] md:text-4xl"
            >
              A Closer Look At Our Community Spaces
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={70}
            className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[var(--ink-soft)]"
          >
            Each space within the community serves a purpose, whether it is
            encouraging social interaction, providing a quiet retreat, or
            supporting daily wellness routines.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {facilitySpaces.map((space, index) => (
              <BorderGlow
                key={space.title}
                data-reveal
                data-reveal-delay={index * 70}
                data-tilt
                className="h-full"
                borderRadius={16}
                glowRadius={24}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--bg)] text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ink)]">{space.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {space.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <BorderGlow
            data-reveal
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <div className="h-full rounded-3xl bg-[var(--bg)] p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
                Designed With Residents In Mind
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)]">
                The layout of Hayat Care Center prioritizes accessibility,
                natural light, and a residential feel. Wide hallways, clear
                signage, and ground-level access make it easy for residents to
                move through the building with confidence. Common areas are
                positioned to encourage organic interaction, while private spaces
                provide the quiet that everyone needs from time to time.
              </p>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--ink-soft)]">
                Ongoing improvements to finishes, furnishings, and shared spaces
                reflect a commitment to maintaining a high standard of living.
                Families are welcome to visit anytime and see the community
                firsthand.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/gallery/photos"
                  className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  View Photo Gallery
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                >
                  Schedule A Tour
                </Link>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

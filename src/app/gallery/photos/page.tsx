import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { photoCategories } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Photos | Hayat Care Center",
  description: "Browse photos of Hayat Care Center's community spaces, suites, dining areas, and outdoor grounds.",
};

export default function PhotosPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Photo Gallery
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              See The Community Through Our Lens
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Browse images of our living spaces, common areas, dining rooms,
            outdoor courtyards, and wellness facilities. A tour in person is
            always the best way to experience Hayat, but these photos offer a
            helpful preview.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {photoCategories.map((cat, index) => (
              <BorderGlow
                key={cat.title}
                data-reveal
                data-reveal-delay={index * 80}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bg)] text-[var(--brand-blue)] ring-1 ring-[var(--line)]">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[var(--ink)]">{cat.title}</h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--brand-blue)]">
                    {cat.count} Photos
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {cat.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <BorderGlow
            data-reveal
            data-reveal-delay={200}
            data-tilt
            className="mt-12 h-full"
            borderRadius={18}
            glowRadius={24}
          >
            <div className="h-full rounded-2xl bg-white p-7">
              <h3 className="text-2xl font-bold text-[var(--ink)]">
                Want To See It In Person?
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                Photos give a preview, but nothing replaces walking through the
                community yourself. Schedule a tour and see the spaces, meet the
                team, and experience the atmosphere firsthand.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                >
                  Schedule A Tour
                </Link>
                <Link
                  href="/gallery/videos"
                  className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  Watch Video Tours
                </Link>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

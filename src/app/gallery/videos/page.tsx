import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { videoHighlights } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Videos | Hayat Care Center",
  description: "Watch walkthrough tours, resident stories, and community highlights from Hayat Care Center.",
};

export default function VideosPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Video Gallery
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Experience Hayat Care Center In Motion
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Our video collection gives you a feel for the day-to-day rhythm,
            the spaces, the people, and the atmosphere that make Hayat a place
            residents are glad to call home.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videoHighlights.map((video, index) => (
              <BorderGlow
                key={video.title}
                data-reveal
                data-reveal-delay={index * 90}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-[var(--bg)]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-orange)] text-white shadow-lg">
                      <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[var(--ink-soft)]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {video.duration}
                  </div>
                  <h2 className="mt-2 text-lg font-bold text-[var(--ink)]">
                    {video.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {video.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={200}
            className="mt-12 text-center"
          >
            <p className="text-sm text-[var(--ink-soft)]">
              Ready to see the community in person?
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
              >
                Schedule A Tour
              </Link>
              <Link
                href="/gallery/photos"
                className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
              >
                Browse Photos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

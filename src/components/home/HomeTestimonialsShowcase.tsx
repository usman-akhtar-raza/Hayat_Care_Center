"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export type TestimonialStory = {
  quote: string;
  story: string;
  name: string;
  role: string;
};

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";

export default function HomeTestimonialsShowcase({
  featured,
  stories,
}: {
  featured: TestimonialStory | undefined;
  stories: readonly TestimonialStory[];
}) {
  const allStories = featured ? [featured, ...stories] : [...stories];
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % allStories.length);
    }, 5000);
  }, [allStories.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (index: number) => {
    setActive(index);
    resetTimer();
  };

  const goPrev = () => goTo((active - 1 + allStories.length) % allStories.length);
  const goNext = () => goTo((active + 1) % allStories.length);

  const current = allStories[active];

  return (
    <section className="relative overflow-hidden border-b border-[#041e3a] py-16 md:py-24">
      {/* Dark navy background */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a1628]" aria-hidden />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full border border-white/[0.04] bg-white/[0.02]" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full border border-white/[0.04] bg-white/[0.02]" />
        <div className="absolute bottom-10 left-[15%] h-48 w-48 rounded-full border border-white/[0.03] bg-white/[0.015]" />
        <div className="absolute right-[20%] top-[10%] h-56 w-56 rounded-full border border-white/[0.04] bg-white/[0.02]" />
        <div className="absolute -left-10 bottom-[30%] h-36 w-36 rounded-full border border-white/[0.03] bg-white/[0.01]" />
        <div className="absolute right-[8%] top-[55%] h-40 w-40 rounded-full border border-white/[0.03] bg-white/[0.015]" />
      </div>

      <div className={`relative z-[1] ${shell}`}>
        <div className={inner}>
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p data-reveal className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
              Testimonials
            </p>
            <p
              data-reveal
              data-reveal-delay={20}
              className="mt-3  font-[family-name:var(--font-playfair),serif] text-3xl font-bold leading-[1.15] tracking-tight text-[#d5664b] md:text-[2.75rem]"
            >
              5-Star Reviews from{" "}
              <span className="text-[#4a9eff]">Families And Participants</span>
            </p>
            <p
              data-reveal
              data-reveal-delay={40}
              className="mt-4 text-sm leading-relaxed text-blue-100/70 md:text-base"
            >
              Here&apos;s what families and participants say about care for young adults through older adults.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative mt-12 flex items-center justify-center md:mt-16">
            {/* Left arrow */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="absolute left-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60 backdrop-blur-sm transition hover:bg-white/20 hover:text-white md:-left-2 lg:-left-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Card */}
            <div className="mx-14 w-full max-w-2xl md:mx-20">
              <article
                key={active}
                className="animate-[fadeSlideIn_0.4s_ease-out] rounded-2xl bg-white p-8 shadow-2xl md:p-10"
              >
                {/* Stars + quote icon */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-5 w-5 shrink-0 fill-[#3b82f6]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-4xl leading-none text-[#4a9eff]/30" aria-hidden>
                    &#x201D;&#x201D;
                  </span>
                </div>

                {/* Quote */}
                <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg md:leading-8">
                  &ldquo;{current.story}&rdquo;
                </p>

                {/* Footer */}
                <footer className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#64748b] text-sm font-bold text-white">
                      {initials(current.name)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{current.name}</p>
                      <p className="text-xs text-slate-500">{current.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600">
                      Adult Care
                    </span>
                    <span className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold text-slate-600">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#22c55e" />
                      </svg>
                      Verified
                    </span>
                  </div>
                </footer>
              </article>
            </div>

            {/* Right arrow */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="absolute right-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/60 backdrop-blur-sm transition hover:bg-white/20 hover:text-white md:-right-2 lg:-right-6"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {allStories.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* CTA */}
          <div data-reveal data-reveal-delay={100} className="mt-10 flex justify-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/80 bg-white/10 px-7 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:bg-white/20"
            >
              View all testimonials
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselSlide {
  title: string;
  text: string;
  image: string;
  accent: string;
}

const slides: CarouselSlide[] = [
  {
    title: "Nourishing, Chef-Prepared Meals",
    text: "Three daily meals plus snacks — seasonal menus, dietary accommodations, and the warmth of shared dining that turns every meal into a highlight.",
    image: "/images/home/gallery-dining-social.jpg",
    accent: "from-[#d5664b]",
  },
  {
    title: "Purposeful Daily Activities",
    text: "Creative workshops, fitness programs, social gatherings, and outings fill every day of the week — keeping minds sharp and spirits high.",
    image: "/images/home/gallery-wellness-programs.jpg",
    accent: "from-[#073d7a]",
  },
  {
    title: "Compassionate, Personalized Care",
    text: "Every resident receives a tailored wellness plan built around their mobility, preferences, and goals — never a one-size-fits-all approach.",
    image: "/images/home/gallery-compassionate-care.jpg",
    accent: "from-[#0a4a8f]",
  },
  {
    title: "Comfortable Living Spaces",
    text: "Welcoming lounges, quiet reading nooks, beautiful courtyards, and well-appointed suites designed for both community and privacy.",
    image: "/images/home/gallery-comfortable-lounge.jpg",
    accent: "from-[#073d7a]",
  },
  {
    title: "Family Peace of Mind",
    text: "Transparent updates, responsive coordination, and honest guidance when needs evolve — families stay partners in care, not bystanders.",
    image: "/images/home/gallery-reception.jpg",
    accent: "from-[#d5664b]",
  },
];

const AUTOPLAY_MS = 5000;

export default function BenefitsCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const startRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
    startRef.current = 0;
  }, []);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
    setProgress(0);
    startRef.current = 0;
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
    startRef.current = 0;
  }, []);

  useEffect(() => {
    if (paused) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tick = (now: number) => {
      if (!startRef.current) startRef.current = now;
      const elapsed = now - startRef.current;
      const p = Math.min(elapsed / AUTOPLAY_MS, 1);
      setProgress(p);
      if (p >= 1) {
        next();
      } else {
        timerRef.current = requestAnimationFrame(tick);
      }
    };

    timerRef.current = requestAnimationFrame(tick);
    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [active, paused, next]);

  const slide = slides[active];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Benefits of choosing Hayat"
    >
      {/* Image + overlay */}
      <div className="relative h-[340px] overflow-hidden sm:h-[400px] md:h-[460px]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? "scale(1)" : "scale(1.05)",
            }}
            aria-hidden={i !== active}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t ${slide.accent} via-slate-950/40 to-transparent opacity-80 transition-colors duration-700`}
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
          <div
            key={active}
            className="benefit-carousel-text max-w-xl"
          >
            <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/90 backdrop-blur-sm">
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <h3 className="mt-2 font-[family-name:var(--font-playfair),serif] text-2xl font-semibold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl">
              {slide.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85 drop-shadow sm:text-base md:max-w-md">
              {slide.text}
            </p>
          </div>
        </div>

        {/* Nav arrows */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-4 sm:h-11 sm:w-11"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-4 sm:h-11 sm:w-11"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={2} aria-hidden />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 bg-white px-4 py-4">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            className="group relative h-2 overflow-hidden rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]"
            style={{ width: i === active ? 48 : 10 }}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
            aria-current={i === active ? "true" : undefined}
          >
            <span className="absolute inset-0 rounded-full bg-slate-200" />
            {i === active && (
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-[var(--brand-gold)] transition-none"
                style={{ width: `${progress * 100}%` }}
              />
            )}
            {i !== active && (
              <span className="absolute inset-0 rounded-full bg-slate-300 opacity-0 transition-opacity group-hover:opacity-100" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

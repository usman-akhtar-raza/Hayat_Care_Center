import Link from "next/link";

export type TestimonialStory = {
  quote: string;
  story: string;
  name: string;
  role: string;
};

const shell = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";
const inner = "mx-auto w-full max-w-7xl";

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

function StarsRow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 shrink-0 fill-[var(--brand-gold)]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  story,
  featured = false,
  delay,
}: {
  story: TestimonialStory;
  featured?: boolean;
  delay: number;
}) {
  return (
    <article
      data-reveal
      data-reveal-delay={delay}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)] ring-1 ring-white/60 ${
        featured ? "p-8 md:p-10 lg:p-12" : "p-6 md:p-7"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--brand-gold)]/12 via-[var(--brand-gold)]/5 to-transparent"
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-3">
        <StarsRow />
        <span
          className="font-[family-name:var(--font-playfair),serif] text-4xl leading-none text-[#073d7a]/15 transition-colors group-hover:text-[#073d7a]/25 md:text-5xl"
          aria-hidden
        >
          &ldquo;
        </span>
      </div>
      <p
        className={`relative mt-4 font-semibold leading-snug text-slate-900 ${
          featured ? "text-lg md:text-xl" : "text-base"
        }`}
      >
        {story.quote}
      </p>
      <p
        className={`relative mt-3 flex-1 leading-relaxed text-slate-600 ${
          featured ? "text-base leading-7" : "text-sm"
        }`}
      >
        {story.story}
      </p>
      <footer className="relative mt-6 flex flex-wrap items-end justify-between gap-3 border-t border-slate-100 pt-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#073d7a] text-sm font-bold text-white shadow-inner">
            {initials(story.name)}
          </span>
          <div>
            <p className="text-sm font-bold text-slate-900">{story.name}</p>
            <p className="text-xs text-slate-500">{story.role}</p>
          </div>
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#073d7a]/90">
          Family story
        </span>
      </footer>
    </article>
  );
}

export default function HomeTestimonialsShowcase({
  featured,
  stories,
}: {
  featured: TestimonialStory | undefined;
  stories: readonly TestimonialStory[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#052a52] py-16 md:py-24">
      {/* Atmospheric background — navy + soft orbs (Hayat palette) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#052848] via-[#073d7a] to-[#062a52]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden>
        <div className="absolute -left-[25%] top-[-10%] h-[min(90vw,520px)] w-[min(90vw,520px)] rounded-full bg-[#d5664b]/20 blur-[80px]" />
        <div className="absolute -right-[20%] top-[30%] h-[min(85vw,480px)] w-[min(85vw,480px)] rounded-full bg-[#0a4a8f]/50 blur-[90px]" />
        <div className="absolute bottom-[-20%] left-[20%] h-[400px] w-[400px] rounded-full bg-white/[0.07] blur-[70px]" />
      </div>
      <div className={`relative z-[1] ${shell}`}>
        <div className={inner}>
          <div className="mx-auto max-w-3xl text-center">
            <p data-reveal className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
              Testimonials
            </p>
            <h2
              data-reveal
              data-reveal-delay={40}
              className="mt-4 font-[family-name:var(--font-playfair),serif] text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-[2.5rem]"
            >
              Stories from families and participants
            </h2>
            <p
              data-reveal
              data-reveal-delay={70}
              className="mt-4 text-sm leading-relaxed text-blue-100/90 md:text-base"
            >
              Real reflections—not one-liners—so you can see how Hayat shows up when routines, health, and emotions are
              all in play.
            </p>
          </div>

          {featured && (
            <div className="mt-12 md:mt-14">
              <TestimonialCard story={featured} featured delay={100} />
            </div>
          )}

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:mt-8">
            {stories.map((t, index) => (
              <TestimonialCard key={t.name} story={t} delay={120 + index * 55} />
            ))}
          </div>

          <div data-reveal data-reveal-delay={200} className="mt-12 flex justify-center md:mt-14">
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

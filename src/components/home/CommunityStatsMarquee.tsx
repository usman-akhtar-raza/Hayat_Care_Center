"use client";

import { useEffect, useState } from "react";

type Stat = { readonly value: string; readonly label: string };

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function StatChip({ stat }: { stat: Stat }) {
  return (
    <article className="flex w-[min(100vw-2.5rem,300px)] shrink-0 items-center gap-4 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm sm:px-5 sm:py-3.5">
      <span className="inline-flex min-h-[2.75rem] min-w-[3.25rem] shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#073D7A]/14 to-[#073D7A]/6 px-2 text-center text-base font-bold tabular-nums text-[#073D7A] sm:min-w-[3.5rem] sm:text-lg">
        {stat.value}
      </span>
      <p className="text-left text-xs font-medium leading-snug text-slate-600 sm:text-sm">{stat.label}</p>
    </article>
  );
}

export default function CommunityStatsMarquee({ items }: { items: readonly Stat[] }) {
  const reduceMotion = usePrefersReducedMotion();
  const loop = reduceMotion ? items : [...items, ...items];

  return (
    <section className="home-surface-soft border-b border-slate-200 py-10 md:py-12">
      {reduceMotion ? (
        <div className="mx-auto grid w-full max-w-7xl gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 xl:px-10">
          {items.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-center shadow-sm"
            >
              <p className="text-xl font-bold tabular-nums text-slate-900">{stat.value}</p>
              <p className="mt-1 text-xs font-medium leading-snug text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="home-stats-marquee-wrap">
          <div className="home-stats-marquee-track home-stats-marquee-track--animate">
            {loop.map((stat, i) => (
              <StatChip key={`${stat.label}-${i}`} stat={stat} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

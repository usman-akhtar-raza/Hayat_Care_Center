"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  type LucideIcon,
  CalendarHeart,
  ClipboardCheck,
  HeartHandshake,
  UtensilsCrossed,
} from "lucide-react";

const timelineIconMap: Record<string, LucideIcon> = {
  UtensilsCrossed,
  CalendarHeart,
  HeartHandshake,
  ClipboardCheck,
};

interface TimelineItem {
  stat: string;
  label: string;
  description: string;
  lucideIcon: string;
  image: string;
}

interface BenefitsTimelineProps {
  items: readonly TimelineItem[];
}

export default function BenefitsTimeline({ items }: BenefitsTimelineProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeNodes, setActiveNodes] = useState<boolean[]>(() =>
    Array(items.length).fill(false)
  );

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const viewportCenter = window.innerHeight * 0.55;
    const trackTop = trackRect.top;
    const trackHeight = trackRect.height;

    const scrolled = viewportCenter - trackTop;
    const pct = Math.max(0, Math.min((scrolled / trackHeight) * 100, 100));
    setFillHeight(pct);

    const nodes = track.querySelectorAll<HTMLElement>("[data-timeline-node]");
    setActiveNodes((prev) => {
      const next = [...prev];
      let changed = false;
      nodes.forEach((node, i) => {
        if (next[i]) return; // already active — never deactivate
        const nodeRect = node.getBoundingClientRect();
        const nodeCenter = nodeRect.top + nodeRect.height / 2;
        if (nodeCenter < viewportCenter + 40) {
          next[i] = true;
          changed = true;
        }
      });
      return changed ? next : prev;
    });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setFillHeight(100);
      setActiveNodes(Array(items.length).fill(true));
      return;
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length, onScroll]);

  return (
    <div ref={trackRef} className="timeline-track relative mx-auto max-w-5xl">
      {/* Center line — the scroll bar */}
      <div
        className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-slate-200 md:block"
        aria-hidden
      >
        <div
          className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-[var(--brand-gold)] to-[var(--brand-navy)] transition-none"
          style={{ height: `${fillHeight}%` }}
        />
      </div>

      {/* Mobile: left-side line */}
      <div
        className="absolute left-5 top-0 h-full w-[3px] rounded-full bg-slate-200 md:hidden"
        aria-hidden
      >
        <div
          className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-[var(--brand-gold)] to-[var(--brand-navy)] transition-none"
          style={{ height: `${fillHeight}%` }}
        />
      </div>

      {/* Timeline items */}
      <div className="relative space-y-0">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isActive = activeNodes[index];
          const TimelineIcon = timelineIconMap[item.lucideIcon] ?? ClipboardCheck;

          return (
            <div
              key={item.label}
              className="timeline-row relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]"
            >
              {/* ── Desktop left column ── */}
              <div
                className={`hidden py-8 md:block ${
                  isEven ? "pr-12" : "pr-12 md:invisible"
                }`}
              >
                {isEven && (
                  <div
                    className={`timeline-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-700 hover:shadow-lg ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="text-3xl font-bold text-white drop-shadow-lg">
                          {item.stat}
                        </span>
                        <p className="text-xs font-semibold text-white/90 drop-shadow">
                          {item.label}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                        <TimelineIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Center node (dot on the line) ── */}
              <div
                className="absolute left-5 top-8 z-10 flex -translate-x-1/2 md:static md:flex md:translate-x-0 md:items-start md:justify-center md:pt-8"
                data-timeline-node
              >
                <div
                  className={`timeline-node relative flex h-11 w-11 items-center justify-center rounded-full border-[3px] transition-all duration-500 ${
                    isActive
                      ? "scale-100 border-[var(--brand-gold)] bg-white shadow-[0_0_0_4px_rgba(213,102,75,0.15)]"
                      : "scale-75 border-slate-300 bg-slate-100"
                  }`}
                >
                  <TimelineIcon
                    className={`h-5 w-5 transition-colors duration-500 ${
                      isActive ? "text-[var(--brand-gold)]" : "text-slate-400"
                    }`}
                    strokeWidth={2}
                    aria-hidden
                  />
                  {isActive && (
                    <span className="absolute inset-0 animate-[timelineNodePing_0.8s_cubic-bezier(0,0,0.2,1)_forwards] rounded-full border-2 border-[var(--brand-gold)] opacity-0" />
                  )}
                </div>
              </div>

              {/* ── Desktop right column ── */}
              <div
                className={`hidden py-8 md:block ${
                  !isEven ? "pl-12" : "pl-12 md:invisible"
                }`}
              >
                {!isEven && (
                  <div
                    className={`timeline-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-700 hover:shadow-lg ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-8 opacity-0"
                    }`}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <span className="text-3xl font-bold text-white drop-shadow-lg">
                          {item.stat}
                        </span>
                        <p className="text-xs font-semibold text-white/90 drop-shadow">
                          {item.label}
                        </p>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                        <TimelineIcon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
                      </div>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Mobile card (always right of the line) ── */}
              <div className="py-6 pl-12 md:hidden">
                <div
                  className={`timeline-card group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-700 hover:shadow-lg ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <span className="text-2xl font-bold text-white drop-shadow-lg">
                        {item.stat}
                      </span>
                      <p className="text-xs font-semibold text-white/90 drop-shadow">
                        {item.label}
                      </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

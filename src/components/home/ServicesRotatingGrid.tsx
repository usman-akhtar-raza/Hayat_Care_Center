"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

type ServicesRotatingGridProps = {
  services: readonly ServiceItem[];
};

const ROTATION_DELAY_MS = 3000;
const SERVICES_PER_ROW = 3;
const SLIDE_DURATION_S = 0.8;
const VISIBLE_SLOTS = 3;

function chunkBy<T>(items: readonly T[], size: number): T[][] {
  if (size <= 0) return [];

  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size) as T[]);
  }
  return chunks;
}

type RotatingServicesRowProps = {
  row: readonly ServiceItem[];
  rowIndex: number;
};

function RotatingServicesRow({ row, rowIndex }: RotatingServicesRowProps) {
  const [offset, setOffset] = useState(0);
  const [snapWithoutAnimation, setSnapWithoutAnimation] = useState(false);

  useEffect(() => {
    if (row.length < 2) return;

    const timer = window.setInterval(() => {
      setOffset((current) => current + 1);
    }, ROTATION_DELAY_MS);

    return () => window.clearInterval(timer);
  }, [row.length]);

  useEffect(() => {
    if (row.length < 2 || offset !== row.length) return;

    const timeout = window.setTimeout(() => {
      setSnapWithoutAnimation(true);
      setOffset(0);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setSnapWithoutAnimation(false);
        });
      });
    }, SLIDE_DURATION_S * 1000);

    return () => window.clearTimeout(timeout);
  }, [offset, row.length]);

  const duplicatedRow = useMemo(() => [...row, ...row], [row]);
  const slideWidthPercent = 100 / VISIBLE_SLOTS;

  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex"
        animate={{ x: `-${offset * slideWidthPercent}%` }}
        transition={snapWithoutAnimation ? { duration: 0 } : { duration: SLIDE_DURATION_S, ease: [0.22, 1, 0.36, 1] }}
      >
        {duplicatedRow.map((service, index) => {
          const visibleSlot = index - offset;
          const isCenterCard = visibleSlot === 1;

          return (
            <div key={`${rowIndex}-${service.title}-${index}`} className="w-1/3 shrink-0 px-2">
              <article
                className={`h-full rounded-xl border bg-white p-5 shadow-sm transition-[transform,box-shadow,opacity,border-color] duration-700 hover:shadow-md ${
                  isCenterCard ? "border-slate-300 scale-[1.08] shadow-md" : "border-slate-200 scale-[0.94] opacity-90"
                }`}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                    <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function ServicesRotatingGrid({ services }: ServicesRotatingGridProps) {
  const rows = useMemo(() => chunkBy(services, SERVICES_PER_ROW), [services]);

  return (
    <>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:hidden">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
              </svg>
            </div>
            <h3 className="mt-3 text-base font-bold text-slate-900">{service.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 hidden gap-4 lg:flex lg:flex-col">
        {rows.map((row, rowIndex) =>
          row.length === SERVICES_PER_ROW ? (
            <RotatingServicesRow key={`row-${rowIndex}`} row={row} rowIndex={rowIndex} />
          ) : (
            <div key={`row-${rowIndex}`} className="grid grid-cols-3 gap-4">
              {row.map((service) => (
                <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-800">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                      <path strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="mt-3 text-base font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                </article>
              ))}
            </div>
          )
        )}
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type JourneyStep = {
  title: string;
  detail: string;
  image: string;
  imageAlt: string;
  rightTitle: string;
  rightDetail: string;
};

const journeySteps: JourneyStep[] = [
  {
    title: "Morning arrival and check in",
    detail:
      "Each participant is welcomed and checked in with a short status review so the day starts calmly and safely.",
    image: "/images/seniors/senior-care-center-02.jpg",
    imageAlt: "Older adults seated in a warm community room at the start of the day",
    rightTitle: "Arrival sets the tone for the day",
    rightDetail:
      "Staff greet each participant by name and align the day plan with comfort mobility and family notes.",
  },
  {
    title: "Programs and purposeful activity",
    detail:
      "Movement social interaction and structured activities are paced to ability so participants stay engaged without overload.",
    image: "/images/seniors/senior-activity-01.jpg",
    imageAlt: "Two seniors talking and connecting during daytime activity hours",
    rightTitle: "Engagement with structure not pressure",
    rightDetail:
      "Programs are chosen to support cognition movement and social confidence while preserving personal pace.",
  },
  {
    title: "Meals hydration and rest",
    detail:
      "Nutrition hydration and quiet breaks are built in to keep energy stable and reduce fatigue through the day.",
    image: "/images/seniors/senior-comfort-01.jpg",
    imageAlt: "Senior care participant in a calm indoor care environment",
    rightTitle: "Balanced energy through the afternoon",
    rightDetail:
      "Meals hydration and quiet time are coordinated so participants stay comfortable and attentive.",
  },
  {
    title: "Family handoff and updates",
    detail:
      "Pickup includes a clear handoff summary so families know what went well and where follow up may be needed.",
    image: "/images/seniors/senior-mobility-support-01.jpg",
    imageAlt: "Caregiver supporting an elderly participant with mobility at handoff time",
    rightTitle: "Clear handoff before pickup",
    rightDetail:
      "Families leave with practical updates on mood meals participation and any recommended next steps.",
  },
];

export default function StickyDayJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = activeEntries[0];
        if (!next) return;

        const nextIndex = Number((next.target as HTMLElement).dataset.stepIndex);
        if (Number.isNaN(nextIndex)) return;

        setActiveIndex(nextIndex);
      },
      {
        root: null,
        threshold: [0.35, 0.6, 0.85],
        rootMargin: "-18% 0px -34% 0px",
      },
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
      <div className="order-1 space-y-6 sm:space-y-8 lg:space-y-10">
        {journeySteps.map((step, index) => (
          <article
            key={step.title}
            data-step-index={index}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            className={`min-h-[44vh] px-1 pb-8 pt-4 transition-opacity duration-300 md:pb-10 md:pt-5 ${
              index !== journeySteps.length - 1 ? "border-b border-slate-200/70" : ""
            } ${activeIndex === index ? "opacity-100" : "opacity-70"}`}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-gold)]">Step {index + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">{step.detail}</p>

            <div className="mt-5 block lg:hidden">
              <div className="relative h-56 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <Image src={step.image} alt={step.imageAlt} fill className="object-cover" sizes="100vw" />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="order-2 lg:sticky lg:top-28 lg:self-start">
        <div className="relative mx-auto h-[16rem] max-w-[34rem] overflow-hidden rounded-lg border border-slate-200/90 bg-slate-100 sm:h-[18rem] lg:h-[23rem]">
          {journeySteps.map((step, index) => (
            <div
              key={step.title}
              className={`absolute inset-0 transition-[opacity,transform] duration-500 ease-out ${
                activeIndex === index ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-[1.02]"
              }`}
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/15 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-slate-300/80 pt-5">
          <h3 className="mt-2 text-2xl font-semibold !text-[#D5664B]">{journeySteps[activeIndex].rightTitle}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{journeySteps[activeIndex].rightDetail}</p>
        </div>
      </div>
    </div>
  );
}

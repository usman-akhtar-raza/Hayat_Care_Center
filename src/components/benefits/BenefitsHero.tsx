"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const typewriterPhrases = [
  "Comes With Being Part Of Hayat",
  "Makes Every Day Feel Purposeful",
  "Families Trust And Rely On",
];

function BenefitsTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typewriterPhrases[phraseIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < phrase.length) {
            setText(phrase.slice(0, text.length + 1));
          } else {
            window.setTimeout(() => setIsDeleting(true), 2200);
          }
        } else if (text.length > 0) {
          setText(phrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      },
      isDeleting ? 35 : 70,
    );

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span className="inline">
      <span className="drop-shadow-[0_2px_20px_rgba(213,102,75,0.35)]" style={{ color: "#D5664B" }}>
        {text}
      </span>
      <span
        className="ml-0.5 inline-block h-[0.85em] w-[3px] rounded-sm bg-[#D5664B] animate-pulse align-middle shadow-[0_0_8px_rgba(213,102,75,0.6)]"
        aria-hidden
      />
    </span>
  );
}

export default function BenefitsHero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[70svh] items-center overflow-hidden -mt-24 pt-24 sm:-mt-[5.75rem] sm:pt-[5.75rem] md:min-h-[75svh]"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/seniors/senior-care-center-02.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-[#073D7A]/72" />
        {/* Warm radial accent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 15% 40%, rgba(213,102,75,0.2) 0%, transparent 55%)",
          }}
        />
        {/* Bottom fade for clean transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-32"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs font-bold uppercase tracking-[0.22em] text-white/60"
          >
            Benefits
          </motion.p>

          {/* Heading — static part white, typewriter part in brand orange */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 text-3xl font-bold leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{ color: "white" }}
          >
            <span className="block">
              <span>Everything That </span>
              <BenefitsTypewriter />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200/85 sm:text-lg md:text-xl"
          >
            From nourishing meals and wellness programming to companionship and
            family peace of mind — here is what residents and their families
            actually receive.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-full bg-[#D5664B] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-[#c4553a]"
            >
              Schedule a tour
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/amenities"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Explore amenities
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

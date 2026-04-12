"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { contactDetails } from "@/data/siteContent";

const services = [
  {
    text: "Adult day program",
    image: "/images/seniors/senior-care-center-01.jpg",
    imageAlt: "Hayat adult day program in Colorado — welcoming community daytime care",
  },
  {
    text: "Home care agency",
    image: "/images/seniors/senior-home-care-01.jpg",
    imageAlt: "Hayat home care agency in Colorado — trusted in-home support",
  },
  {
    text: "Non-medical transportation",
    image: "/images/transport/medical-transportation.jpg",
    imageAlt: "Hayat non-medical transportation service in Colorado — safe, reliable rides",
  },
] as const;

function getCardStyle(cardIndex: number, currentIndex: number) {
  const n = services.length;
  const relativeIndex = (cardIndex - currentIndex + n) % n;

  /* Coverflow: same card size for all; center = focus, sides sit behind (smaller scale + Z + mild Y rotation). */
  switch (relativeIndex) {
    case 0:
      return {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 30,
      };
    case 1:
      return {
        x: 92,
        y: 4,
        z: -240,
        scale: 0.9,
        rotateY: -12,
        zIndex: 11,
      };
    case 2:
      return {
        x: -92,
        y: 4,
        z: -240,
        scale: 0.9,
        rotateY: 12,
        zIndex: 10,
      };
    default:
      return {
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotateY: 0,
        zIndex: 30,
      };
  }
}

function RotatingCards({ currentIndex }: { currentIndex: number }) {
  const n = services.length;

  /** One footprint for every card — only scale/depth changes for side vs center (carousel / cover flow). */
  const cardFrame =
    "relative h-[min(44vh,360px)] w-[min(78vw,272px)] overflow-hidden rounded-[1.35rem] sm:h-[400px] sm:w-[278px] lg:h-[min(48vh,428px)] lg:w-[292px] sm:rounded-[1.65rem]";

  return (
    <div
      className="relative mx-auto h-[min(54vh,460px)] w-full min-w-[320px] max-w-[540px] lg:h-[min(58vh,540px)] lg:max-w-[580px]"
      style={{ perspective: "1900px" }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] h-[min(88%,400px)] w-[min(125%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#D5664B]/[0.12] blur-[44px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-[46%] h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-2xl"
        aria-hidden
      />

      <div className="absolute inset-0 flex items-center justify-center overflow-visible [transform-style:preserve-3d]">
        {services.map((service, index) => {
          const style = getCardStyle(index, currentIndex);
          const rel = (index - currentIndex + n) % n;
          const isFront = rel === 0;

          return (
            <motion.div
              key={service.text}
              className="absolute [transform-style:preserve-3d] will-change-transform"
              initial={false}
              animate={{
                x: style.x,
                y: style.y,
                z: style.z,
                scale: style.scale,
                rotateY: style.rotateY,
              }}
              transition={{
                duration: 0.82,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                zIndex: style.zIndex,
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className={`${cardFrame} shadow-black/45 transition-shadow duration-500 ${
                  isFront
                    ? "shadow-[0_28px_56px_-20px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.14)]"
                    : "shadow-[0_18px_40px_-22px_rgba(0,0,0,0.6)]"
                }`}
              >
                <div
                  className={`absolute inset-0 ${isFront ? "" : "brightness-[0.93] saturate-[0.96]"}`}
                >
                  <Image
                    src={service.image}
                    alt={isFront ? service.imageAlt : ""}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 292px, 300px"
                    priority={index === 0}
                  />
                  {/* Bottom-only scrim: full photo visible on top, no dark gradient over the sky/ceiling */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/88 via-black/32 to-transparent"
                    aria-hidden
                  />
                </div>

                <div
                  className="pointer-events-none absolute inset-0 rounded-[1.35rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-inset ring-white/10 sm:rounded-[1.65rem]"
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 z-20 p-2.5 sm:p-3">
                  <div
                    className={`rounded-xl border backdrop-blur-md sm:rounded-2xl ${
                      isFront
                        ? "border-white/25 bg-black/40"
                        : "border-white/15 bg-black/50"
                    }`}
                  >
                    {isFront ? (
                      <div
                        className="h-0.5 w-full bg-gradient-to-r from-[#D5664B] via-[#e87860] to-transparent"
                        aria-hidden
                      />
                    ) : null}
                    <div className="px-3 py-2 sm:px-3.5 sm:py-2.5">
                      <p
                        className={`text-[9px] font-semibold uppercase tracking-[0.26em] sm:text-[10px] ${
                          isFront ? "text-white/70" : "text-white/60"
                        }`}
                      >
                        Hayat · Colorado
                      </p>
                      <h3 className="mt-0.5 text-[0.88rem] font-semibold leading-snug tracking-tight text-white text-balance sm:text-[1rem] lg:text-[1.05rem]">
                        {service.text}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-1 lg:pb-2">
        <div
          className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-2 shadow-lg shadow-black/20 backdrop-blur-md"
          aria-hidden
        >
          {services.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === currentIndex
                  ? "w-7 bg-[#D5664B] shadow-[0_0_14px_rgba(213,102,75,0.55)]"
                  : "w-1.5 bg-white/35 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Typewriter({ onWordChange }: { onWordChange: (index: number) => void }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = services[wordIndex].text;
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < word.length) {
            setText(word.slice(0, text.length + 1));
          } else {
            window.setTimeout(() => setIsDeleting(true), 2000);
          }
        } else if (text.length > 0) {
          setText(word.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          const nextIndex = (wordIndex + 1) % services.length;
          setWordIndex(nextIndex);
          onWordChange(nextIndex);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, onWordChange]);

  return (
    <span className="inline-block">
      <span className="text-[#f4b5a8] drop-shadow-[0_1px_12px_rgba(0,0,0,0.35)]">{text}</span>
      <span
        className="ml-1 inline-block h-[0.9em] w-[2px] rounded-sm bg-[#D5664B] animate-pulse align-middle"
        aria-hidden
      />
    </span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const handleWordChange = useCallback((index: number) => {
    setCurrentServiceIndex(index);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-x-clip overflow-y-visible -mt-24 pt-24 sm:-mt-[5.75rem] sm:pt-[5.75rem]"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src="/images/new/4.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#073D7A]/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 20% 35%, rgba(213,102,75,0.18) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      <motion.div
        className="container relative z-10 mx-auto max-w-7xl py-16 sm:px-6 lg:py-24"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24 lg:overflow-visible">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-[1.5rem] font-bold leading-[1.12] text-slate-50 sm:text-4xl md:text-5xl lg:text-4xl"
            >
              <span className="sr-only">
                Hayat adult day program, home care agency, and non-medical transportation in Colorado
              </span>
              <span aria-hidden className="block">
                <span className="text-slate-50">Hayat </span>
                <Typewriter onWordChange={handleWordChange} />
              </span>
              <span className="mt-1 block font-semibold text-slate-200/95">in Colorado</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-slate-200/80 sm:text-xl"
            >
              Adult day programs, home care, and non-medical transportation—one coordinated team for families across
              Colorado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mb-14 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D5664B] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:bg-[#c4553a] group"
              >
                Request a consult
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={contactDetails.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                <Phone className="mr-2 h-5 w-5" />
                {contactDetails.phoneLabel}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="flex flex-row flex-wrap gap-4 border-t border-white/15 pt-8"
            >
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                  ))}
                </div>
                <span className="text-sm text-white/60">5.0</span>
              </div>
              <div className="text-sm text-white/60">
                <span className="font-semibold text-white">Family-centered</span> care
              </div>
              <div className="text-sm text-white/60">Colorado communities</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="relative hidden min-w-0 overflow-visible lg:block lg:justify-self-end xl:justify-self-center"
          >
            <RotatingCards currentIndex={currentServiceIndex} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

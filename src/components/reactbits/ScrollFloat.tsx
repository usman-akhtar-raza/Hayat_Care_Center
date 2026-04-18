"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
  as: Tag = "h2",
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  /** Split into words so line breaks never cut a word in half (each char was inline-block). */
  const splitText = useMemo(() => {
    const text =
      typeof children === "string" ? children.replace(/\s+/g, " ").trim() : "";
    if (!text) return null;

    const parts = text.split(/(\s+)/);
    return parts.map((part, partIndex) => {
      if (/^\s+$/.test(part)) {
        return (
          <span key={`ws-${partIndex}`} className="sf-ws">
            {part}
          </span>
        );
      }
      if (!part) return null;
      return (
        <span key={`w-${partIndex}`} className="sf-word">
          {part.split("").map((char, charIndex) => (
            <span className="sf-char" key={charIndex}>
              {char}
            </span>
          ))}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const scroller =
      scrollContainerRef?.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll(".sf-char");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: "opacity, transform",
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: "50% 0%",
        },
        {
          duration: animationDuration,
          ease,
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger,
    reducedMotion,
  ]);

  return (
    <Tag
      ref={containerRef as React.RefObject<HTMLHeadingElement>}
      className={`scroll-float-container ${containerClassName}`}
    >
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </Tag>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const updateScrollProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, {
      passive: true,
    });
    window.addEventListener("resize", updateScrollProgress, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    document.documentElement.style.setProperty(
      "--scroll-progress",
      progress.toFixed(4),
    );
  }, [pathname]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => {
        element.dataset.revealed = "true";
      });

      return;
    }

    const timeouts = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const delay = Number(element.dataset.revealDelay ?? "0");

          observer.unobserve(element);

          const timeoutId = window.setTimeout(() => {
            element.dataset.revealed = "true";
            timeouts.delete(timeoutId);
          }, delay);

          timeouts.add(timeoutId);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    elements.forEach((element) => {
      delete element.dataset.revealed;
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [pathname]);

  return (
    <>
      <div aria-hidden className="scroll-progress" />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import GooeyNav from "@/components/reactbits/GooeyNav";

interface NavChild {
  label: string;
  href: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Community",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Get to know Hayat, our setting, and our approach." },
      { label: "Our Facility", href: "/community/our-facility", description: "See the spaces, upgrades, and design that shape daily life." },
      { label: "Testimonials", href: "/testimonials", description: "Hear how residents and families describe the experience." },
    ],
  },
  {
    label: "Amenities & Services",
    href: "/amenities",
    children: [
      { label: "Amenities", href: "/amenities", description: "Comforts and conveniences available each day." },
      { label: "Activities & Events", href: "/activities-events", description: "Social programs, outings, and daily gatherings." },
      { label: "Life Enrichment", href: "/wellness", description: "Wellness and engagement programs at Hayat." },
      { label: "Dining Experience", href: "/dining", description: "Meals, hospitality, and nutrition handled with care." },
    ],
  },
  {
    label: "Living Options",
    href: "/services",
    children: [
      { label: "Assisted Living", href: "/services", description: "Personalized care, daily support, and wellness oversight." },
      { label: "Move-In Process", href: "/enrollment", description: "Consultation, assessment, and transition steps." },
    ],
  },
  {
    label: "Gallery & Floor Plans",
    href: "/floor-plans",
    children: [
      { label: "Floor Plans", href: "/floor-plans", description: "Browse suite layouts and compare footprints." },
      { label: "Photos", href: "/gallery/photos", description: "View our community spaces, suites, and grounds." },
      { label: "Videos", href: "/gallery/videos", description: "Watch walkthrough tours and community highlights." },
    ],
  },
  {
    label: "Resources",
    href: "/resources/blog",
    children: [
      { label: "Blog", href: "/resources/blog", description: "Articles on senior wellness, lifestyle, and community." },
      { label: "Senior Living Guide", href: "/resources/senior-living-guide", description: "Helpful information for families exploring options." },
      { label: "FAQ", href: "/faq", description: "Common questions answered clearly." },
    ],
  },
  {
    label: "Contact & Careers",
    href: "/contact",
    children: [
      { label: "Contact Us", href: "/contact", description: "Schedule a tour or request a callback." },
      { label: "Careers", href: "/careers", description: "Join the Hayat Care Center team." },
    ],
  },
];

const desktopNavItems = navItems.map((item) => ({
  label: item.label,
  href: item.href,
}));

function MobileAccordion({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        aria-current={pathname === item.href ? "page" : undefined}
        className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
          pathname === item.href
            ? "bg-[var(--brand-navy)] text-white"
            : "text-[var(--ink)] hover:bg-sky-50"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        aria-controls={`mobile-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
          item.children.some((c) => pathname === c.href)
            ? "bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]"
            : "text-[var(--ink)] hover:bg-sky-50"
        } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`}
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div
          id={`mobile-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
          className="ml-3 space-y-0.5 border-l-2 border-[var(--line)] pl-3 pt-1 pb-2"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              aria-current={pathname === child.href ? "page" : undefined}
              className={`block rounded-lg px-3 py-2.5 text-sm ${
                pathname === child.href
                  ? "font-semibold text-[var(--brand-navy)]"
                  : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
              } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`}
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopOpenIndex, setDesktopOpenIndex] = useState<number | null>(null);
  const desktopCloseTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const pathname = usePathname();
  const routeNavIndex = navItems.findIndex(
    (item) =>
      pathname === item.href ||
      item.children?.some((child) => pathname === child.href),
  );
  const desktopActiveIndex = desktopOpenIndex ?? routeNavIndex;
  const desktopOpenItem =
    desktopOpenIndex !== null ? navItems[desktopOpenIndex] : null;

  const clearDesktopCloseTimer = () => {
    if (desktopCloseTimerRef.current) {
      clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
  };

  const openDesktopDropdown = (index: number) => {
    clearDesktopCloseTimer();
    if (navItems[index]?.children?.length) {
      setDesktopOpenIndex(index);
      return;
    }
    setDesktopOpenIndex(null);
  };

  const scheduleDesktopClose = () => {
    clearDesktopCloseTimer();
    desktopCloseTimerRef.current = setTimeout(() => {
      setDesktopOpenIndex(null);
    }, 140);
  };

  const handleDesktopBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      clearDesktopCloseTimer();
      setDesktopOpenIndex(null);
    }
  };

  const handleDesktopKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      clearDesktopCloseTimer();
      setDesktopOpenIndex(null);
      (event.currentTarget.querySelector("a") as HTMLAnchorElement | null)?.focus();
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      clearDesktopCloseTimer();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "shadow-lg shadow-slate-900/10" : ""
      }`}
    >
      <div className="bg-[var(--brand-orange1)]">
        <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="shrink-0" aria-label="Hayat Care Center home">
            <Image
              src="/hayat-logo.png"
              alt="Hayat Adult Daycare and Community Center"
              width={215}
              height={100}
              className="h-[82px] w-[180px] sm:h-[100px]"
              priority
            />
          </Link>

          <div className="hidden xl:block">
            <div
              className="relative"
              onMouseEnter={clearDesktopCloseTimer}
              onMouseLeave={scheduleDesktopClose}
              onBlur={handleDesktopBlur}
              onKeyDown={handleDesktopKeyDown}
            >
              <GooeyNav
                items={desktopNavItems}
                ariaLabel="Primary navigation"
                activeIndex={desktopActiveIndex}
                particleCount={11}
                className="text-sm font-semibold [--gooey-gap:0.18rem] [--gooey-pad:0.25rem] [--gooey-link-py:0.6rem] [--gooey-link-px:0.9rem] [--color-1:#2f7ec9] [--color-2:#5aa9df] [--color-3:#d87443] [--color-4:#153f73]"
                onItemEnter={(_item: NavItem, index: number) => openDesktopDropdown(index)}
                onItemFocus={(_item: NavItem, index: number) => openDesktopDropdown(index)}
                onItemActivate={(_item: NavItem, index: number) => openDesktopDropdown(index)}
                onNavMouseLeave={scheduleDesktopClose}
              />

              {desktopOpenItem?.children && (
                <div
                  id={`desktop-gooey-panel-${desktopOpenIndex}`}
                  className="dropdown-panel absolute left-1/2 top-full z-50 mt-3 w-[22rem] -translate-x-1/2 rounded-2xl bg-white p-2 shadow-xl shadow-slate-900/10 ring-1 ring-[var(--line)]"
                  role="group"
                  aria-label={`${desktopOpenItem.label} links`}
                >
                  {desktopOpenItem.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className={`block rounded-xl px-4 py-3 transition-colors ${
                        pathname === child.href
                          ? "bg-[var(--brand-navy)]/5 text-[var(--brand-navy)]"
                          : "hover:bg-sky-50"
                      } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]`}
                      onClick={() => setDesktopOpenIndex(null)}
                    >
                      <span className="block text-sm font-semibold text-[var(--ink)]">
                        {child.label}
                      </span>
                      <span className="mt-0.5 block text-xs leading-5 text-[var(--ink-soft)]">
                        {child.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden xl:block">
            <Link
              href="/contact"
              className="inline-flex w-34 items-center rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
            >
              Schedule Visit
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-[var(--line)] bg-white p-2 text-[var(--brand-navy)] xl:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {mobileOpen && (
          <div id="mobile-nav-panel" className="border-t border-[var(--line)] bg-white px-4 pb-4 xl:hidden max-h-[70vh] overflow-y-auto">
            <div className="mx-auto max-w-7xl space-y-1 pt-3">
              {navItems.map((item) => (
                <MobileAccordion
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                onClick={() => setMobileOpen(false)}
              >
                Schedule Visit
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type FocusEvent, type KeyboardEvent } from "react";
import { contactDetails } from "@/data/siteContent";

interface NavChild {
  label: string;
  href: string;
  description: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Our care",
    children: [
      {
        label: "Adult care center",
        href: "/adult-care-center",
        description: "Daytime programs, supervision, and community connection in a welcoming center setting.",
      },
      {
        label: "Home care agency",
        href: "/home-care-agency",
        description: "Trusted caregivers in your home for personal care, companionship, and daily routines.",
      },
      {
        label: "Non-medical transportation",
        href: "/non-medical-transportation",
        description: "Scheduled rides for appointments and errands—safe, courteous, and coordinated with your care plan.",
      },
    ],
  },
  {
    label: "Explore",
    children: [
      { label: "Benefits", href: "/benefits", description: "Meals, wellness, activities, and everything included." },
      { label: "Amenities", href: "/amenities", description: "Comforts and shared spaces that shape daily life." },
      { label: "Activities & events", href: "/activities-events", description: "Social programs, outings, and gatherings." },
      { label: "Wellness", href: "/wellness", description: "Movement, engagement, and whole-person support." },
      { label: "Dining", href: "/dining", description: "Hospitality-led meals with thoughtful nutrition." },
      { label: "Meal plan", href: "/meal-plan", description: "Seven day menu with breakfast lunch dinner and ingredient details." },
      { label: "Floor plans", href: "/floor-plans", description: "Compare layouts and imagine everyday living." },
      { label: "Photo gallery", href: "/gallery/photos", description: "See community spaces, suites, and grounds." },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/resources/blog", description: "Articles for families navigating care decisions." },
      { label: "Senior living guide", href: "/resources/senior-living-guide", description: "Plain-language guidance for your next step." },
      { label: "FAQ", href: "/faq", description: "Answers to common questions about Hayat." },
    ],
  },
  { label: "Careers", href: "/careers" },
];

function MobileSection({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const panelId = `mobile-nav-${item.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  if (!item.children) {
    const href = item.href ?? "/";
    return (
      <Link
        href={href}
        aria-current={pathname === href ? "page" : undefined}
        className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] ${
          pathname === href
            ? "bg-[#073D7A]/10 text-[#073D7A] hover:bg-[#D5664B] hover:text-white"
            : "text-black hover:bg-[#D5664B] hover:text-white"
        }`}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="rounded-xl ring-1 ring-slate-200">
      <button
        type="button"
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        aria-controls={panelId}
        className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] ${
          item.children.some((c) => pathname === c.href)
            ? "text-[#D5664B] hover:bg-[#D5664B] hover:text-white"
            : "text-black hover:bg-[#D5664B] hover:text-white"
        }`}
      >
        {item.label}
        <svg
          className={`h-4 w-4 shrink-0 text-[#073D7A] transition-transform group-hover:text-white ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div id={panelId} className="space-y-0.5 border-t border-slate-200 px-2 py-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              aria-current={pathname === child.href ? "page" : undefined}
              className="group block rounded-lg px-3 py-2.5 transition-colors hover:bg-[#D5664B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B]"
              onClick={onNavigate}
            >
              <span
                className={`block text-sm font-semibold transition-colors group-hover:text-white ${
                  pathname === child.href ? "text-[#073D7A] group-hover:text-white" : "text-black"
                }`}
            >
              {child.label}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-slate-600 transition-colors group-hover:text-white/90">
                {child.description}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setOpenIndex(null), 160);
  };

  const openDropdown = (index: number) => {
    clearCloseTimer();
    if (navItems[index]?.children?.length) {
      setOpenIndex(index);
      return;
    }
    setOpenIndex(null);
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      clearCloseTimer();
      setOpenIndex(null);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      clearCloseTimer();
      setOpenIndex(null);
    }
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMobileOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** At top of homepage only: sit on the hero with no bar; after scroll → glass. */
  const heroOverlayNav = pathname === "/" && !scrolled && !mobileOpen;

  const linkBase = heroOverlayNav
    ? "rounded-lg px-2.5 py-2 text-sm font-semibold text-white/95 transition-colors hover:bg-[#D5664B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
    : "rounded-lg px-2.5 py-2 text-sm font-semibold text-black/90 transition-colors hover:bg-[#D5664B] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] focus-visible:ring-offset-2 focus-visible:ring-offset-white";
  const linkActive = heroOverlayNav ? "text-white" : "text-[#073D7A]";
  const linkAccent = "text-[#D5664B]";

  /** Match homepage / hero gutters (`max-w-[1920px] px-4 sm:px-6 xl:px-10`). */
  const headerGutter = "mx-auto w-full max-w-[1920px] px-4 sm:px-6 xl:px-10";

  const shellTransition =
    "transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out";

  const shellClassGlassMobile =
    "w-full rounded-[2rem] border border-white/80 bg-white/92 px-3 py-2 shadow-[0_12px_44px_-10px_rgba(7,61,122,0.22)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/90";

  const shellClassTransparent =
    "w-full rounded-full border border-transparent bg-transparent px-3 py-2 sm:px-5 sm:py-2.5 shadow-none";

  /** Hero: floating pill (transparent, or rounded glass when mobile menu open). Scrolled: no inner pill. */
  const heroInnerShell = mobileOpen
    ? `${shellTransition} ${shellClassGlassMobile}`
    : `${shellTransition} ${shellClassTransparent}`;

  const scrolledNavBar =
    "w-full border-b border-slate-200/90 bg-white/95 shadow-[0_4px_20px_-6px_rgba(7,61,122,0.14)] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/92";

  return (
    <header className="fixed inset-x-0 top-0 z-[60] w-full bg-transparent">
      <div
        className={
          heroOverlayNav
            ? `${headerGutter} pt-3 sm:pt-4 md:pt-5`
            : `${scrolledNavBar} ${shellTransition}`
        }
      >
        <div className={heroOverlayNav ? heroInnerShell : `${headerGutter} py-2 sm:py-2.5 md:py-3`}>
          <nav
            aria-label="Primary"
            className="grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-4"
          >
            <Link href="/" className="flex w-fit shrink-0 items-center gap-2" aria-label="Hayat Care Centers home">
            <Image
                src={heroOverlayNav ? "/whietlogoo.png" : "/logoo.png"}
                alt=""
                width={320}
                height={115}
                className={`w-auto max-w-[min(72vw,320px)] object-contain object-left transition-[height,min-height] duration-300 ${
                  heroOverlayNav
                    ? "h-24 min-h-[3.5rem] sm:h-[4.25rem] sm:min-h-[4.25rem] md:h-[4.75rem] md:min-h-[4.75rem] lg:h-24 lg:min-h-20 drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]"
                    : "h-10 min-h-10 sm:h-12 sm:min-h-[3rem] drop-shadow-sm"
                }`}
              priority
            />
          </Link>


            <div
              className="relative hidden min-w-0 justify-self-center lg:block"
              onMouseEnter={clearCloseTimer}
              onMouseLeave={scheduleClose}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
            >
              <ul className="flex flex-wrap items-center justify-center gap-0.5 xl:gap-1">
                <li>
                  <Link
                    href="/"
                    className={`${linkBase} ${pathname === "/" ? (heroOverlayNav ? "text-[#D5664B]" : linkActive) : ""}`}
                  >
                    Home
                  </Link>
                </li>
                {navItems.map((item, index) => {
                  if (!item.children) {
                    const href = item.href ?? "/";
                    return (
                      <li key={item.label}>
                        <Link href={href} className={`${linkBase} ${pathname === href ? linkActive : ""}`}>
                          {item.label}
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <li key={item.label} className="relative">
                      <button
                        type="button"
                        className={`flex items-center gap-1 ${linkBase} ${
                          openIndex === index || item.children.some((c) => pathname === c.href)
                            ? heroOverlayNav
                              ? "text-[#D5664B]"
                              : linkAccent
                            : ""
                        }`}
                        aria-expanded={openIndex === index}
                        aria-haspopup="true"
                        aria-controls={`desktop-nav-dropdown-${index}`}
                        onMouseEnter={() => openDropdown(index)}
                        onFocus={() => openDropdown(index)}
                      >
                        {item.label}
                        <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openIndex === index && (
                        <div
                          id={`desktop-nav-dropdown-${index}`}
                          className="dropdown-panel absolute left-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-2rem))] translate-x-1 rounded-2xl border border-slate-200/90 bg-white/95 p-2 shadow-xl shadow-black/20 backdrop-blur-md"
                  role="group"
                          aria-label={`${item.label} links`}
                          onMouseEnter={clearCloseTimer}
                >
                          {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                              className="group block rounded-xl px-4 py-3 transition-colors hover:bg-[#D5664B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073D7A]"
                              onClick={() => setOpenIndex(null)}
                            >
                              <span className="block text-sm font-semibold text-black transition-colors group-hover:text-white">
                        {child.label}
                      </span>
                              <span className="mt-0.5 block text-xs leading-5 text-slate-600 transition-colors group-hover:text-white/90">
                        {child.description}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
                    </li>
                  );
                })}
              </ul>
          </div>

            <div className="flex items-center justify-end gap-2 sm:gap-3 lg:justify-self-end">
              <a
                href={contactDetails.phoneHref}
                className={`hidden text-sm font-semibold transition lg:inline ${
                  heroOverlayNav ? "text-white/90 hover:text-white" : "text-slate-600 hover:text-[#073D7A]"
                }`}
              >
                {contactDetails.phoneLabel}
              </a>
            <Link
              href="/contact"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#D5664B] px-4 py-2 text-xs font-bold text-white shadow-md transition hover:bg-[#c4553a] sm:px-5 sm:py-2.5 sm:text-sm"
            >
                Get started
                <svg className="h-3.5 w-3.5 opacity-90 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M7 17L17 7M7 7h10v10" />
                </svg>
            </Link>
          <button
                type="button"
                onClick={() => setMobileOpen((p) => !p)}
                className={`inline-flex rounded-xl p-2.5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5664B] ${
                  heroOverlayNav
                    ? "border border-white/35 bg-white/15 text-white"
                    : "border border-slate-200/90 bg-white/90 text-black"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            </div>
        </nav>

        {mobileOpen && (
            <div
              id="mobile-nav-panel"
              className="mt-2 max-h-[min(72vh,560px)] overflow-y-auto border-t border-slate-200/80 pt-3 lg:hidden"
            >
              <div className="space-y-2 pb-3">
                <Link
                  href="/"
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === "/"
                      ? "bg-[#073D7A]/10 text-[#073D7A] hover:bg-[#D5664B] hover:text-white"
                      : "text-black hover:bg-[#D5664B] hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
              {navItems.map((item) => (
                  <MobileSection
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
              <Link
                href="/contact"
                  className="mt-2 flex w-full items-center justify-center rounded-full bg-[#D5664B] px-5 py-3 text-sm font-bold text-white"
                onClick={() => setMobileOpen(false)}
              >
                  Get started
              </Link>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  );
}

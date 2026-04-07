"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Enrollment", href: "/enrollment" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${scrolled ? "shadow-lg shadow-slate-900/10" : ""
        }`}
    >
      <div className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:text-sm">
          <p className="font-semibold tracking-wide">Adult Daycare & Community Center</p>
          <div className="flex items-center gap-4">
            <a href="tel:+11234567890" className="hover:text-[#ffd9ca] transition-colors">
              (123) 456-7890
            </a>
            <span className="hidden sm:inline">Mon-Fri 7:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <div className="glass">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="shrink-0" aria-label="Hayat Care Center home">
            <Image
              src="/logo.jpg"
              alt="Hayat Adult Daycare and Community Center"
              width={215}
              height={84}
              className="h-[52px] w-auto sm:h-[72px]"
              priority
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  pathname === item.href
                    ? "bg-[var(--brand-navy)] text-white"
                    : "text-[var(--ink)] hover:bg-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
            >
              Schedule Visit
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-[var(--line)] bg-white p-2 text-[var(--brand-navy)] lg:hidden"
            aria-label="Toggle navigation"
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
          <div className="border-t border-[var(--line)] bg-white px-4 pb-4 lg:hidden">
            <div className="mx-auto max-w-7xl space-y-1 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
                    pathname === item.href
                      ? "bg-[var(--brand-navy)] text-white"
                      : "text-[var(--ink)] hover:bg-sky-50"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-orange)] px-5 py-2.5 text-sm font-bold text-white"
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

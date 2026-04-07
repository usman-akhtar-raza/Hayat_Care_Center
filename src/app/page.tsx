import Link from "next/link";
import { contactDetails, services } from "@/data/siteContent";

const pageLinks = [
  {
    title: "About",
    href: "/about",
    description: "Mission, who we serve, and why families trust Hayat.",
  },
  {
    title: "Services",
    href: "/services",
    description: "Detailed care and day program services.",
  },
  {
    title: "Enrollment",
    href: "/enrollment",
    description: "Step-by-step intake and eligibility process.",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Real stories from families and members.",
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Clear answers to common care questions.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Book a visit or request a callback.",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="reveal-up text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand-blue)]">
              Hayat Care Center
            </p>
            <h1 className="reveal-up delay-1 mt-3 text-4xl font-bold leading-tight text-[var(--ink)] md:text-5xl lg:text-6xl">
              Adult Daycare That Protects
              <span className="text-[var(--brand-orange)]"> Dignity</span>
              <br />
              And Strengthens Families
            </h1>
            <p className="reveal-up delay-2 mt-5 max-w-2xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
              Explore dedicated pages for services, enrollment, testimonials,
              FAQs, and contact to quickly find the exact information your
              family needs.
            </p>
            <div className="reveal-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand-orange)] px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[var(--brand-orange-strong)]"
              >
                Schedule a Free Visit
              </Link>
              <a
                href={contactDetails.phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--brand-navy)]"
              >
                Call {contactDetails.phoneLabel}
              </a>
            </div>
          </div>

          <aside className="glass rounded-3xl p-6 shadow-xl shadow-slate-900/10 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
              Quick Navigation
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--ink)]">
              Start Where You Need
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              Every major section now has its own page for easier browsing.
            </p>
            <div className="mt-5 space-y-3 text-sm text-[var(--ink)]">
              <Link href="/about" className="block rounded-xl bg-white px-4 py-3 font-semibold ring-1 ring-[var(--line)]">
                Learn About Hayat
              </Link>
              <Link href="/services" className="block rounded-xl bg-white px-4 py-3 font-semibold ring-1 ring-[var(--line)]">
                View All Services
              </Link>
              <Link href="/enrollment" className="block rounded-xl bg-white px-4 py-3 font-semibold ring-1 ring-[var(--line)]">
                See Enrollment Process
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Dedicated Pages
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">
            Browse By Topic
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pageLinks.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 ring-1 ring-[var(--line)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex text-sm font-bold text-[var(--brand-blue)]"
                >
                  Visit page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">
            Service Highlights
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-bold text-[var(--ink)] md:text-4xl">
            Comprehensive Daytime Support
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <article
                key={service.title}
                className="rounded-2xl bg-[var(--bg)] p-6 ring-1 ring-[var(--line)]"
              >
                <h3 className="text-xl font-bold text-[var(--ink)]">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{service.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

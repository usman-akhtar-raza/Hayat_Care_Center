import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Testimonials | Hayat Care Center",
  description: "Read stories from families and members who trust Hayat Care Center.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]">Testimonials</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-[var(--ink)] md:text-5xl">
            What Families And Members Say About Hayat
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg">
            Real feedback helps families decide with confidence. Here are some
            of the experiences shared by our community.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name + item.role} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[var(--line)]">
                <div className="mb-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-7 text-[var(--ink-soft)]">“{item.quote}”</p>
                <p className="mt-5 text-sm font-bold text-[var(--ink)]">{item.name}</p>
                <p className="text-xs text-[var(--ink-soft)]">{item.role}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
            >
              Book A Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

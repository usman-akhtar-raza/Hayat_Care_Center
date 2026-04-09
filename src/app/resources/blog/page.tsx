import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { blogPosts } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Blog | Hayat Care Center",
  description: "Articles on senior wellness, healthy aging, family guidance, and community life at Hayat Care Center.",
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Blog
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              Insights On Senior Wellness, Community, And Family Support
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Practical articles written for families and caregivers who are
            exploring senior living, supporting a loved one, or simply
            looking for helpful information on aging well.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BorderGlow
                key={post.title}
                data-reveal
                data-reveal-delay={index * 80}
                data-tilt
                className="h-full overflow-hidden"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                  <div className="flex h-44 items-center justify-center bg-[var(--bg)]">
                    <span className="rounded-full bg-[var(--brand-blue)]/10 px-3 py-1 text-xs font-bold text-[var(--brand-blue)]">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-3 text-xs text-[var(--ink-soft)]">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--line)]" />
                      <span>{post.readTime} read</span>
                    </div>
                    <h2 className="mt-2 text-lg font-bold leading-snug text-[var(--ink)]">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-6 text-[var(--ink-soft)]">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-[var(--brand-blue)]">
                      Read Article &rarr;
                    </span>
                  </div>
                </article>
              </BorderGlow>
            ))}
          </div>

          <div
            data-reveal
            data-reveal-delay={200}
            className="mt-12 text-center"
          >
            <p className="text-sm text-[var(--ink-soft)]">
              Looking for specific guidance on senior living decisions?
            </p>
            <Link
              href="/resources/senior-living-guide"
              className="mt-3 inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
            >
              Explore The Senior Living Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import BorderGlow from "@/components/reactbits/BorderGlow";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import { seniorLivingGuideTopics } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Senior Living Guide | Hayat Care Center",
  description: "A helpful resource for families exploring senior living options, covering timing, types of care, touring, conversations, and financial planning.",
};

export default function SeniorLivingGuidePage() {
  return (
    <>
      <section className="hero-grid">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <p
            data-reveal
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-blue)]"
          >
            Senior Living Guide
          </p>
          <div data-reveal data-reveal-delay={90}>
            <ScrollFloat
              as="h1"
              containerClassName="mt-3 max-w-4xl text-4xl font-bold text-[var(--ink)] md:text-5xl"
              textClassName="text-balance"
            >
              A Practical Guide For Families Exploring Senior Living
            </ScrollFloat>
          </div>
          <p
            data-reveal
            data-reveal-delay={180}
            className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] md:text-lg"
          >
            Choosing the right community for a loved one involves many
            questions. This guide covers the most important topics families
            encounter when considering senior living, from recognizing the
            right timing to planning a smooth move-in.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seniorLivingGuideTopics.map((topic, index) => (
              <BorderGlow
                key={topic.title}
                data-reveal
                data-reveal-delay={index * 80}
                data-tilt
                className="h-full"
                borderRadius={18}
                glowRadius={26}
              >
                <article className="h-full rounded-2xl bg-white p-6">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand-orange)]/10 text-sm font-bold text-[var(--brand-orange)]">
                    {index + 1}
                  </div>
                  <h2 className="text-lg font-bold leading-snug text-[var(--ink)]">
                    {topic.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {topic.description}
                  </p>
                </article>
              </BorderGlow>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <BorderGlow
            data-reveal
            data-tilt
            className="h-full"
            borderRadius={24}
            glowRadius={30}
          >
            <div className="h-full rounded-3xl bg-[var(--bg)] p-8 md:p-10">
              <h2 className="text-3xl font-bold text-[var(--ink)] md:text-4xl">
                Still Have Questions?
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)]">
                Every family&apos;s situation is different. Our team is happy to
                walk through your specific questions, discuss what options might
                be the best fit, and help you feel confident about the next step.
                There is no pressure and no obligation.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[var(--brand-orange)] px-6 py-3 text-sm font-bold text-white"
                >
                  Talk To Our Team
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex rounded-full bg-[var(--brand-navy)] px-6 py-3 text-sm font-bold text-white"
                >
                  View FAQ
                </Link>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-16 bg-[var(--warm-bg)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Give Your Loved One the Gift of
          <span className="text-[var(--primary)]"> Community</span>
        </h2>
        <p className="text-[var(--text-muted)] mb-8 max-w-xl mx-auto leading-relaxed">
          Schedule a free visit today and see firsthand why families across the
          community trust Hayat with the care of their loved ones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center bg-[var(--accent)] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[var(--accent-light)] transition-all shadow-md hover:shadow-lg"
          >
            Schedule a Free Visit
          </Link>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center border-2 border-[var(--primary)] text-[var(--primary)] px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors"
          >
            Call (123) 456-7890
          </a>
        </div>
      </div>
    </section>
  );
}

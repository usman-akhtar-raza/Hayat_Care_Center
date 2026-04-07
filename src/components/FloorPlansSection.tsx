import Link from "next/link";

const floorPlans = [
  {
    name: "Jasmine Suite",
    type: "Studio",
    sqft: "336 sq. ft.",
    color: "from-emerald-50 to-emerald-100",
    icon: (
      <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    name: "Rose Garden",
    type: "One Bedroom",
    sqft: "480 sq. ft.",
    color: "from-amber-50 to-amber-100",
    icon: (
      <svg className="w-12 h-12 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Lily Terrace",
    type: "Two Bedroom",
    sqft: "720 sq. ft.",
    color: "from-teal-50 to-teal-100",
    icon: (
      <svg className="w-12 h-12 text-[var(--primary-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function FloorPlansSection() {
  return (
    <section id="floor-plans" className="py-16 md:py-24 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Floor Plans
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Choose from a variety of thoughtfully designed apartment layouts that
            provide comfort, privacy, and a place to call home.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {floorPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className={`h-48 bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                {plan.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--foreground)] mb-1">
                  {plan.name}
                </h3>
                <p className="text-[var(--primary)] font-medium mb-1">{plan.type}</p>
                <p className="text-[var(--text-muted)] text-sm mb-4">{plan.sqft}</p>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-sm font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors group-hover:gap-3 gap-2"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

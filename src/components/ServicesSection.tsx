const services = [
  {
    title: "Health Monitoring",
    description: "Regular health check-ups, medication management, vital sign monitoring, and coordination with primary care physicians to ensure optimal wellbeing.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    color: "bg-red-50 text-red-500",
  },
  {
    title: "Social & Recreational Activities",
    description: "Engaging group activities, games, music therapy, arts and crafts, and celebrations that build friendships and bring joy to every day.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Nutritious Meals & Snacks",
    description: "Freshly prepared, culturally diverse meals and snacks designed by nutrition experts to meet dietary needs and personal preferences.",
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z",
    color: "bg-orange-50 text-orange-500",
  },
  {
    title: "Door-to-Door Transportation",
    description: "Safe, reliable shuttle service with trained drivers providing door-to-door pickup and drop-off so families can have peace of mind.",
    icon: "M8 7h12l-4 8H8m0-8H4m4 0v8m0 0l-4 4m12-4h4m-4 0v4",
    color: "bg-green-50 text-green-500",
  },
  {
    title: "Cognitive & Fitness Programs",
    description: "Brain-stimulating exercises, memory care activities, gentle fitness classes, and wellness programs tailored for every ability level.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Personal Care Assistance",
    description: "Compassionate help with daily living activities, grooming, mobility support, and personalized care plans that respect individual dignity.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    color: "bg-sky-50 text-sky-500",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Comprehensive Care Services
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Our adult daycare programs provide a full range of services designed
            to enhance wellbeing, promote independence, and offer families the
            support they need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-[var(--primary)]/20 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

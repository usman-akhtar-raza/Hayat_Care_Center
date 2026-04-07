const programs = [
  {
    title: "Arts & Crafts Workshop",
    schedule: "Every Monday & Wednesday",
    time: "10:00 AM - 12:00 PM",
    description: "Express creativity through painting, pottery, and seasonal craft projects in a supportive, fun setting.",
    tag: "Creative",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Gentle Yoga & Fitness",
    schedule: "Every Tuesday & Thursday",
    time: "9:00 AM - 10:00 AM",
    description: "Chair yoga, stretching, and gentle exercises designed to improve mobility, balance, and overall wellness.",
    tag: "Wellness",
    tagColor: "bg-green-100 text-green-700",
  },
  {
    title: "Music & Memory Hour",
    schedule: "Every Wednesday",
    time: "2:00 PM - 3:00 PM",
    description: "Enjoy live music, sing-alongs, and music therapy sessions that stimulate memory and bring joy.",
    tag: "Therapeutic",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Community Game Day",
    schedule: "Every Friday",
    time: "1:00 PM - 3:00 PM",
    description: "Board games, card games, trivia, and friendly competitions that encourage social interaction and fun.",
    tag: "Social",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "Cooking & Nutrition Class",
    schedule: "First Saturday Monthly",
    time: "11:00 AM - 1:00 PM",
    description: "Learn healthy recipes, nutritional tips, and enjoy cooking together with our culinary team.",
    tag: "Nutrition",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    title: "Cultural Celebration",
    schedule: "Monthly Special Event",
    time: "All Day",
    description: "Celebrating diverse cultures through food, music, dance, and storytelling from communities around the world.",
    tag: "Cultural",
    tagColor: "bg-sky-100 text-sky-700",
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
            Stay Active & Engaged
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Programs & Events
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Our vibrant calendar of activities keeps every day fresh and
            exciting. From creative workshops to wellness programs, there is
            something for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${program.tagColor}`}>
                    {program.tag}
                  </span>
                  <svg className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-[var(--primary)] font-medium">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {program.schedule}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

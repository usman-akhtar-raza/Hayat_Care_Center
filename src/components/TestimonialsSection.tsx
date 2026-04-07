const testimonials = [
  {
    name: "Fatima A.",
    relation: "Daughter of Member",
    text: "My mother looks forward to coming here every single day. The staff treats her like family, and the activities keep her mind sharp and her spirits high. Hayat has been a blessing for our whole family.",
    initials: "FA",
    color: "bg-[var(--primary)]",
  },
  {
    name: "Roberto M.",
    relation: "Member",
    text: "I was lonely at home before I found Hayat. Now I have friends, I exercise, I make art, and I eat delicious food. This place gives me something to wake up for every morning.",
    initials: "RM",
    color: "bg-[var(--accent)]",
  },
  {
    name: "Sarah K.",
    relation: "Family Member",
    text: "The transportation service is a lifesaver for our family. Knowing my father is safe, engaged, and cared for while I am at work gives me incredible peace of mind.",
    initials: "SK",
    color: "bg-[var(--sky)]",
  },
  {
    name: "David L.",
    relation: "Son of Member",
    text: "We tried three other adult daycare centers before Hayat. The difference is night and day. The staff genuinely care, and my mom has never been happier. Worth every penny.",
    initials: "DL",
    color: "bg-[var(--primary-dark)]",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
            Trusted by Families
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            What Families Are Saying
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Hear from the families and members who trust Hayat with the care
            of their loved ones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">{t.name}</p>
                  <p className="text-sm text-[var(--text-muted)]">{t.relation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

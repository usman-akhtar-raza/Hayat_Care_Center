import Image from "next/image";

const values = [
  {
    title: "Community Building",
    description: "We foster meaningful connections and friendships in a warm, welcoming environment.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  },
  {
    title: "Compassionate Care",
    description: "Our trained professionals deliver personalized care with empathy and respect.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Promote Empowerment",
    description: "We encourage independence and self-confidence through engaging programs.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Skill Building",
    description: "Creative and cognitive programs that stimulate growth and keep minds active.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Positive Growth",
    description: "Every day is an opportunity for our members to learn, laugh, and flourish.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Personalized Attention",
    description: "Individualized care plans tailored to each member's unique needs and preferences.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-[var(--warm-bg)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + mission */}
          <div>
            <div className="relative">
              <Image
                src="/images/seniors/senior-home-care-01.jpg"
                alt="Caring community at Hayat"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="h-[420px]" />
              <div className="absolute -bottom-6 -right-6 bg-[var(--accent)] text-white px-6 py-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-[var(--accent)] font-semibold text-sm uppercase tracking-wider mb-2">
              Why Choose Hayat
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              A Place Where Every Day
              <br />
              <span className="text-[var(--primary)]">Is Meaningful</span>
            </h2>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              Our mission is to create an environment that fosters growth,
              happiness, and fulfillment for older adults. We believe every
              person deserves to be treated with dignity, surrounded by
              community, and empowered to live their best life.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value) => (
                <div key={value.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--secondary)] text-[var(--primary)] flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={value.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[var(--foreground)]">
                      {value.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-0.5">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

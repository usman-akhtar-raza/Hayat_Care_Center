import Image from "next/image";

export default function VideoTourSection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
          Walkthrough Tour
        </h2>
        <p className="text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
          Take a virtual tour of Hayat Care Center and see our beautiful
          community, amenities, and living spaces.
        </p>

        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gray-900 aspect-video">
          {/* Placeholder for embedded video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Image
              src="https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80"
              alt="Senior living community tour"
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover opacity-60"
            />
            <div className="relative z-10 flex flex-col items-center">
              <button
                className="w-20 h-20 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors mb-4"
                aria-label="Play tour video"
              >
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <p className="text-lg font-semibold">Hayat Care Center Walkthrough Tour</p>
              <p className="text-white/70 text-sm mt-1">2 minute preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

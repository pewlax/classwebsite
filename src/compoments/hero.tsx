export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="font-serif italic text-6xl md:text-7xl lg:text-8xl mb-4 leading-tight">
          The private network for elite entrepreneurs
        </h1>
        <p className="font-tight text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
          An exclusive network for high-achieving entrepreneurial leaders doing $100k+/mo to network, partner & travel.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-full font-tight font-medium text-lg hover:bg-gold-light transition-all hover:scale-105">
            Apply to Join
          </button>
          <button className="border border-white/20 text-white px-8 py-4 rounded-full font-tight font-medium text-lg hover:border-gold-light hover:text-gold-light transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

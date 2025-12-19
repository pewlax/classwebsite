export default function VideoSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center mb-8 text-gold-light">
          What you're missing out on
        </h2>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/uGBuhyIM-MM"
            title="Class Network Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-serif italic text-3xl text-gold-light">Class</span>
            <p className="font-tight text-white/60 text-sm mt-2">The private network for elite entrepreneurs</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <a href="#about" className="font-tight text-white/60 hover:text-white transition-colors">About</a>
            <a href="#network" className="font-tight text-white/60 hover:text-white transition-colors">Network</a>
            <a href="#benefits" className="font-tight text-white/60 hover:text-white transition-colors">Benefits</a>
            <a href="#trips" className="font-tight text-white/60 hover:text-white transition-colors">Trips</a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="font-tight text-white/40 text-sm">
            © 2025 Class. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

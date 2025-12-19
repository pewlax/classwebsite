import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="font-serif italic text-2xl tracking-tight text-gold">Class</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors font-tight">About</a>
            <a href="#network" className="text-white/80 hover:text-white transition-colors font-tight">Network</a>
            <a href="#benefits" className="text-white/80 hover:text-white transition-colors font-tight">Benefits</a>
            <a href="#trips" className="text-white/80 hover:text-white transition-colors font-tight">Trips</a>
            <button className="bg-white text-black px-6 py-2.5 rounded-full font-tight font-medium hover:bg-gold-light transition-colors">
              Apply Now
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/5">
          <div className="px-6 py-4 space-y-4">
            <a href="#about" className="block text-white/80 hover:text-white transition-colors font-tight">About</a>
            <a href="#network" className="block text-white/80 hover:text-white transition-colors font-tight">Network</a>
            <a href="#benefits" className="block text-white/80 hover:text-white transition-colors font-tight">Benefits</a>
            <a href="#trips" className="block text-white/80 hover:text-white transition-colors font-tight">Trips</a>
            <button className="w-full bg-white text-black px-6 py-2.5 rounded-full font-tight font-medium hover:bg-gold-light transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

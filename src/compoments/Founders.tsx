import { CheckCircle2, Instagram } from 'lucide-react';
import mauritsImage from '../685e16d8-858c-419c-b1a1-52115b5ca14c.jpg';
import ahmedImage from '../8d18d634-009f-49a4-8d8c-54ba2b1d21a3.jpg';
import deanImage from '../whatsapp_image_2025-12-19_at_22.08.53 copy.jpeg';

const founders = [
  {
    name: 'Maurits Neo',
    image: mauritsImage,
    instagram: 'https://www.instagram.com/maurits/'
  },
  {
    name: 'Ahmed Moustafa',
    image: ahmedImage,
    instagram: 'https://www.instagram.com/ahmedd/'
  },
  {
    name: 'Dean White',
    image: deanImage,
    instagram: 'https://www.instagram.com/deanxwhite/'
  }
];

export default function Founders() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center mb-6">
          Built by industry leaders, for industry leaders
        </h2>
        <p className="font-tight text-lg text-white/70 text-center max-w-2xl mx-auto mb-16">
          From venture-backed founders to global operators and creators—Class is home to people who move the needle.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-gold-dark transition-all group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-tight text-2xl font-medium">{founder.name}</h3>
                  <CheckCircle2 className="text-blue-500" size={20} fill="currentColor" />
                </div>
                <p className="font-tight text-white/60 mb-4">Co-Founder</p>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-light hover:text-gold-classic transition-colors"
                >
                  <Instagram size={18} />
                  <span className="font-tight text-sm">Follow</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

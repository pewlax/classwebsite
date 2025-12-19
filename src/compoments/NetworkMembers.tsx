import { CheckCircle2 } from 'lucide-react';
import mauritsImage from '../685e16d8-858c-419c-b1a1-52115b5ca14c.jpg';
import ahmedImage from '../8d18d634-009f-49a4-8d8c-54ba2b1d21a3.jpg';
import deanImage from '../whatsapp_image_2025-12-19_at_22.08.53 copy.jpeg';

const members = [
  { name: 'Eric Kavelaars' },
  { name: 'Ahmed Moustafa', image: ahmedImage },
  { name: 'Maurits Neo', image: mauritsImage },
  { name: 'Dean White', image: deanImage },
  { name: 'Saamir Mithwani' },
  { name: 'Eddie Cumberbatch' },
  { name: 'Luke Alexander' },
  { name: 'Sam Zia' },
  { name: 'Musa Mustafa' },
  { name: 'Nik Setting' },
  { name: 'Dustin Varano' },
  { name: 'Zack Isaak' }
];

export default function NetworkMembers() {
  return (
    <section id="network" className="py-24 px-6 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center mb-6">
          Who's in the Network?
        </h2>
        <p className="font-tight text-lg text-white/70 text-center max-w-2xl mx-auto mb-16">
          Connect with verified entrepreneurs and industry leaders who are actively building and scaling.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-gold-dark transition-all text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-zinc-700 group-hover:ring-gold-light transition-all">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
                )}
              </div>
              <p className="font-tight font-medium text-sm">{member.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="font-tight text-2xl text-gold-light font-medium">+ 50 more verified members</p>
        </div>
      </div>
    </section>
  );
}

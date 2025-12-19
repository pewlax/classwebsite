import { Check } from 'lucide-react';

const requirements = [
  'Make over $100k/mo',
  'Bring unique value to the table',
  'Be over 18 years old'
];

export default function HowToApply() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center mb-6">
          How to Apply?
        </h2>
        <p className="font-tight text-lg text-white/70 text-center max-w-2xl mx-auto mb-16">
          Apply to become part of the most exclusive network for elite entrepreneurs.
        </p>

        <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-white/5 rounded-3xl p-12 mb-12">
          <div className="space-y-6 mb-12">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-gold-classic rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-tight text-xl text-white">{requirement}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://linktw.in/HmSSKy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-10 py-4 rounded-full font-tight font-medium text-lg hover:bg-gold-light transition-all hover:scale-105"
            >
              Apply to Join Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

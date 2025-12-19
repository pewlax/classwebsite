import { Plane, Users, Handshake, MessageSquare, Building2, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Plane,
    title: 'Exclusive IRL Trips',
    description: 'Join members on curated trips to Dubai, Monaco, Cape Town, and more. Network in luxury while experiencing the world.'
  },
  {
    icon: Users,
    title: 'Elite Network Access',
    description: 'Connect with verified entrepreneurs doing $100k+/mo. Build relationships that move your business forward.'
  },
  {
    icon: Handshake,
    title: 'High-Trust Deal Flow',
    description: 'Get in on the deals before they hit the open market. Share investments, partnerships, and joint ventures.'
  },
  {
    icon: MessageSquare,
    title: 'Private Masterminds',
    description: 'Join intimate mastermind sessions with industry leaders. Share challenges, insights, and breakthroughs in real-time.'
  },
  {
    icon: Building2,
    title: 'Curated Connections',
    description: 'Access a searchable directory of elite founders. Find members by niche, industry, or skillset instantly.'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth Support',
    description: 'Leverage collective expertise in finance, operations, and strategy. Accelerate your growth with proven frameworks.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif italic text-4xl md:text-5xl text-center mb-6">
          The Class Benefits
        </h2>
        <p className="font-tight text-lg text-white/70 text-center max-w-2xl mx-auto mb-16">
          Not just business, not just a network. The full ecosystem provided for the modern day entrepreneur.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-gold-dark hover:bg-zinc-900/50 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold-light to-gold-classic rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="text-black" size={28} />
              </div>
              <h3 className="font-tight text-xl font-medium mb-3">{benefit.title}</h3>
              <p className="font-tight text-white/60 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Calendar } from 'lucide-react';

const pastTrips = [
  { location: 'Dubai', date: 'May 2025', status: 'past' },
  { location: 'Monaco', date: 'May 2025', status: 'past' },
  { location: 'Egypt', date: 'November 2025', status: 'past' },
  { location: 'Keinemusik', date: 'November 2025', status: 'past' },
  { location: 'Cape Town', subtitle: 'Iman Gadzhi Mastermind', date: 'December 2025', status: 'past' },
  { location: 'Dubai', subtitle: 'Andrew Tate Fight', date: 'December 2025', status: 'latest' }
];

const upcomingTrips = [
  { location: 'Cape Town', subtitle: 'Iron Man Villa', date: 'January 2026', status: 'upcoming' }
];

export default function Trips() {
  return (
    <section id="trips" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="font-serif italic text-4xl md:text-5xl mb-6">
            Past Trips
          </h2>
          <p className="font-tight text-lg text-white/70 max-w-2xl mb-12">
            Join our members as we host masterminds, trips, experiences, and marathons across the globe.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastTrips.map((trip, index) => (
              <div
                key={`${trip.location}-${index}`}
                className={`relative group overflow-hidden rounded-2xl aspect-[4/3] ${
                  trip.status === 'latest' ? 'md:col-span-2 lg:col-span-1 ring-2 ring-gold-classic' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {trip.status === 'latest' && (
                    <div className="absolute top-6 right-6">
                      <span className="bg-gold-classic text-black px-4 py-1.5 rounded-full text-xs font-tight font-medium">
                        Latest Trip
                      </span>
                    </div>
                  )}

                  <h3 className="font-serif italic text-3xl mb-2">{trip.location}</h3>
                  {trip.subtitle && (
                    <p className="font-tight text-gold-light text-sm mb-2">{trip.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} />
                    <span className="font-tight text-sm">{trip.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif italic text-4xl md:text-5xl mb-12">
            Upcoming Trips
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTrips.map((trip) => (
              <div
                key={trip.location}
                className="relative group overflow-hidden rounded-2xl aspect-[4/3] ring-2 ring-gold-light"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-dark via-zinc-900 to-black" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="absolute top-6 right-6">
                    <span className="bg-gold-light text-black px-4 py-1.5 rounded-full text-xs font-tight font-medium">
                      Upcoming
                    </span>
                  </div>

                  <h3 className="font-serif italic text-3xl mb-2">{trip.location}</h3>
                  {trip.subtitle && (
                    <p className="font-tight text-gold-light text-sm mb-2">{trip.subtitle}</p>
                  )}
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar size={16} />
                    <span className="font-tight text-sm">{trip.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

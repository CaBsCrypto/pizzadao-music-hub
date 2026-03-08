'use client';

import { useRef, useState } from 'react';
import { events } from '@/lib/data/events';

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');

  const filtered = events.filter((e) => e.status === tab);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 520 : -520, behavior: 'smooth' });
  };

  return (
    <section id="eventos" className="py-10 bg-[#080503]">

      {/* Frame decorativo */}
      <div
        className="mx-6 md:mx-auto max-w-6xl rounded-2xl overflow-hidden"
        style={{
          border: '1px solid rgba(201,162,39,0.22)',
          background: '#120D07',
          boxShadow: '0 0 40px rgba(201,162,39,0.05), inset 0 0 60px rgba(0,0,0,0.25)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(201,162,39,0.1)]">
          <div className="flex items-center gap-3">
            <h2
              className="font-display italic text-pizza-cream leading-none"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', textShadow: '0 0 40px rgba(201,162,39,0.12)' }}
            >
              📍 Eventos IRL
            </h2>
            {/* Tabs */}
            <div className="flex gap-1.5">
              {([
                { key: 'upcoming', label: '🔮 Próximos' },
                { key: 'past',     label: '📸 Pasados'  },
              ] as const).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => { setTab(key); scrollRef.current?.scrollTo({ left: 0 }); }}
                  className={`px-3 py-1 rounded-full font-body text-[0.65rem] uppercase tracking-[0.08em] cursor-pointer transition-all border ${
                    tab === key
                      ? 'bg-pizza-gold border-pizza-gold text-pizza-dark font-bold'
                      : 'bg-transparent border-[rgba(201,162,39,0.25)] text-[rgba(242,232,213,0.45)] hover:border-[rgba(201,162,39,0.5)] hover:text-pizza-gold'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Arrow buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full border border-[rgba(201,162,39,0.3)] text-pizza-gold bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-gold hover:bg-[rgba(201,162,39,0.08)] cursor-pointer"
              aria-label="Anterior"
            >←</button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full border border-[rgba(201,162,39,0.3)] text-pizza-gold bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-gold hover:bg-[rgba(201,162,39,0.08)] cursor-pointer"
              aria-label="Siguiente"
            >→</button>
          </div>
        </div>

        {/* Scroll area */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto py-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '46px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '46px',
              paddingRight: '64px',
            }}
          >
            {filtered.map((event) => (
              <div
                key={event.id}
                className="rounded-xl overflow-hidden border border-[#2E1E0E] transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,162,39,0.1)] flex-shrink-0"
                style={{
                  width: '200px',
                  scrollSnapAlign: 'start',
                  background: '#1A1208',
                  filter: event.status === 'past' ? 'grayscale(0.4) brightness(0.85)' : 'none',
                }}
              >
                {/* Cover */}
                <div
                  className={`h-[110px] flex items-center justify-center relative overflow-hidden ${
                    event.status === 'upcoming'
                      ? 'bg-gradient-to-br from-[#1A1208] to-[#221810]'
                      : 'bg-gradient-to-br from-[#100B05] to-[#1A1208]'
                  }`}
                >
                  <span className="text-5xl">{event.countryFlag}</span>
                  <div
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded-[12px] text-[0.6rem] font-body font-extrabold uppercase tracking-[0.08em] ${
                      event.status === 'upcoming'
                        ? 'bg-pizza-gold text-pizza-dark'
                        : 'bg-[#2E1E0E] text-[rgba(242,232,213,0.5)]'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'Próximo' : 'Pasado'}
                  </div>
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <div
                    className="font-display italic text-pizza-cream text-[0.82rem] mb-1 leading-snug"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
                  >{event.title}</div>
                  <div className="text-[0.65rem] text-pizza-gold opacity-80 font-body mb-0.5 truncate">
                    📍 {event.city}, {event.country}
                  </div>
                  <div className="text-[0.65rem] text-[rgba(242,232,213,0.4)] font-body">
                    📅 {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-[rgba(201,162,39,0.08)]">
          <span className="text-[0.6rem] text-[rgba(201,162,39,0.35)] font-body uppercase tracking-[0.15em]">
            PizzaDAO · Eventos Web3 · LATAM & Global
          </span>
          <span className="text-[0.6rem] text-[rgba(201,162,39,0.25)] font-body uppercase tracking-[0.1em]">
            {filtered.length} eventos
          </span>
        </div>
      </div>

    </section>
  );
}

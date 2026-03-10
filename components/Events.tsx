'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { events } from '@/lib/data/events';

export default function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const { lang } = useLanguage();
  const T = translations[lang].events;

  const filtered = events.filter((e) => e.status === tab);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 520 : -520, behavior: 'smooth' });
  };

  return (
    <section id="eventos" className="py-10 bg-pizza-sky-mid relative overflow-hidden">
      {/* Frame decorativo */}
      <div
        className="mx-6 md:mx-auto max-w-6xl rounded-2xl overflow-hidden relative z-10"
        style={{
          border: '1px solid rgba(224,144,16,0.25)',
          background: '#FEFCF8',
          boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-pizza-border">
          <div className="flex items-center gap-3">
            <h2
              className="font-display italic text-pizza-dark leading-none"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
            >
              {T.title}
            </h2>
            {/* Tabs */}
            <div className="flex gap-1.5">
              {([
                { key: 'upcoming', label: T.upcoming },
                { key: 'past',     label: T.past     },
              ] as const).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => { setTab(key); scrollRef.current?.scrollTo({ left: 0 }); }}
                  className={`px-3 py-1 rounded-full font-body text-[0.65rem] uppercase tracking-[0.08em] cursor-pointer transition-all border ${
                    tab === key
                      ? 'bg-pizza-red border-pizza-red text-white font-bold'
                      : 'bg-transparent border-pizza-border text-pizza-muted hover:border-pizza-red hover:text-pizza-red'
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
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-red hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)] cursor-pointer"
              aria-label="Anterior"
            >←</button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-red hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)] cursor-pointer"
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
              background: '#FEFCF8',
            }}
          >
            {filtered.map((event) => (
              <div
                key={event.id}
                className="rounded-xl overflow-hidden border border-pizza-border transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(220,38,38,0.1)] hover:border-pizza-red flex-shrink-0"
                style={{
                  width: '200px',
                  scrollSnapAlign: 'start',
                  background: '#FEFCF8',
                  filter: event.status === 'past' ? 'grayscale(0.3) brightness(0.97)' : 'none',
                }}
              >
                {/* Cover */}
                <div
                  className={`h-[110px] flex items-center justify-center relative overflow-hidden ${
                    event.status === 'upcoming'
                      ? 'bg-gradient-to-br from-pizza-raised to-[#FFE4BB]'
                      : 'bg-gradient-to-br from-pizza-bg to-pizza-raised'
                  }`}
                >
                  <span className="text-5xl">{event.countryFlag}</span>
                  <div
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded-[12px] text-[0.6rem] font-body font-extrabold uppercase tracking-[0.08em] ${
                      event.status === 'upcoming'
                        ? 'bg-pizza-red text-white'
                        : 'bg-pizza-raised text-pizza-muted'
                    }`}
                  >
                    {event.status === 'upcoming' ? T.statusUpcoming : T.statusPast}
                  </div>
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <div
                    className="font-display italic text-pizza-dark text-[0.82rem] mb-1 leading-snug"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
                  >{event.title}</div>
                  <div className="text-[0.65rem] text-pizza-red font-body mb-0.5 truncate">
                    📍 {event.city}, {event.country}
                  </div>
                  <div className="text-[0.65rem] text-pizza-muted font-body">
                    📅 {event.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-pizza-border">
          <span className="text-[0.6rem] text-pizza-muted font-body uppercase tracking-[0.15em]">
            {T.footer}
          </span>
          <span className="text-[0.6rem] text-pizza-muted opacity-70 font-body uppercase tracking-[0.1em]">
            {T.eventCount(filtered.length)}
          </span>
        </div>
      </div>

    </section>
  );
}

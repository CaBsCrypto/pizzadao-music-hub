'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { contestEntries } from '@/lib/data/contestEntries';

export default function VotingPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [voted, setVoted] = useState<Set<number>>(new Set());
  const { lang } = useLanguage();
  const T = translations[lang].voting;

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 640 : -640, behavior: 'smooth' });
  };

  const toggleVote = (id: number) => {
    setVoted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section
      id="votaciones"
      className="py-20 relative overflow-hidden bg-pizza-bg"
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
        backgroundImage: 'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      {/* Section header */}
      <div className="text-center mb-10 px-8 relative z-10">
        <div className="inline-block bg-transparent border border-pizza-red text-pizza-red text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
          {T.badge}
        </div>
        <h2
          className="font-display italic text-pizza-dark mb-2"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
        >
          {T.title} <span className="text-pizza-red">{T.highlight}</span>
        </h2>
        <p className="max-w-[520px] mx-auto leading-[1.8] font-body text-[0.9rem] text-pizza-muted">
          {T.description}
        </p>
      </div>

      {/* Carousel frame */}
      <div
        className="mx-6 md:mx-auto max-w-6xl rounded-2xl overflow-hidden relative z-10"
        style={{
          border: '1px solid rgba(209,213,219,0.8)',
          background: '#FFFFFF',
          boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-pizza-border">
          <div className="flex items-center gap-3">
            <h3
              className="font-display italic text-pizza-dark leading-none"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
            >
              {T.carouselTitle}
            </h3>
            <span className="text-pizza-muted font-body text-[0.7rem] hidden sm:inline">
              {contestEntries.length} {T.songs}
            </span>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-red hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)] cursor-pointer"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-red hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)] cursor-pointer"
              aria-label="Siguiente"
            >
              →
            </button>
          </div>
        </div>

        {/* Scroll area */}
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }}
          />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto py-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollPaddingLeft: '46px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: '46px',
              paddingRight: '64px',
            }}
          >
            {contestEntries.map((entry) => (
              <div
                key={entry.id}
                className="flex-shrink-0 border rounded-xl p-5 transition-all duration-300 relative hover:border-pizza-red hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(220,38,38,0.1)]"
                style={{
                  width: '280px',
                  scrollSnapAlign: 'start',
                  background: '#FFFFFF',
                  borderColor: 'rgba(209,213,219,0.8)',
                }}
              >
                {/* Rank badge */}
                <div className="absolute top-3 right-4 font-display italic text-[1.3rem] text-pizza-gold opacity-[0.35]">
                  #{entry.rank}
                </div>

                {/* Emoji + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: entry.bgGradient }}
                  >
                    {entry.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display italic text-pizza-dark text-[0.92rem] leading-snug truncate">{entry.title}</div>
                    <div className="text-[0.75rem] text-pizza-muted font-body truncate">{entry.artist} · {entry.country}</div>
                  </div>
                </div>

                {/* Vote bar */}
                <div className="bg-gray-100 rounded h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded transition-all duration-500"
                    style={{
                      width: `${entry.votePercent}%`,
                      background: 'linear-gradient(90deg, #DC2626, #F97316)',
                    }}
                  />
                </div>

                {/* Count + button */}
                <div className="flex items-center justify-between">
                  <span className="text-[0.72rem] text-pizza-muted font-body">🗳️ {entry.votes} {T.votes}</span>
                  <button
                    onClick={() => toggleVote(entry.id)}
                    className={`px-3.5 py-1.5 rounded-[20px] font-accent text-[0.8rem] cursor-pointer transition-all duration-200 flex items-center gap-1.5 border ${
                      voted.has(entry.id)
                        ? 'bg-pizza-red text-white border-pizza-red'
                        : 'bg-transparent text-pizza-red border-pizza-red hover:bg-pizza-red hover:text-white'
                    }`}
                  >
                    ❤️ {voted.has(entry.id) ? T.voted : T.vote}
                  </button>
                </div>
              </div>
            ))}

            {/* Placeholder CTA */}
            <div
              className="flex-shrink-0 border border-dashed border-pizza-border rounded-xl flex flex-col items-center justify-center text-center p-6 cursor-pointer transition-all duration-200 hover:border-pizza-red hover:bg-[rgba(220,38,38,0.04)] group/cta"
              style={{ width: '200px', scrollSnapAlign: 'start', background: '#FFFFFF' }}
              onClick={() => window.dispatchEvent(new CustomEvent('openPostulationModal'))}
            >
              <div className="text-3xl mb-2 transition-transform duration-200 group-hover/cta:scale-110">🎤</div>
              <div className="font-display italic text-[0.95rem] text-pizza-muted mb-1 group-hover/cta:text-pizza-red transition-colors">{T.ctaTitle}</div>
              <div className="text-[0.78rem] text-pizza-muted opacity-60 font-body group-hover/cta:opacity-100 transition-opacity">{T.ctaDesc}</div>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-pizza-border">
          <span className="text-[0.6rem] text-pizza-muted font-body uppercase tracking-[0.15em]">
            {T.footer}
          </span>
          <span className="text-[0.6rem] text-pizza-muted opacity-80 font-body uppercase tracking-[0.1em]">
            {T.deadline}
          </span>
        </div>
      </div>
    </section>
  );
}

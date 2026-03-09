'use client';

import { useRef, useState } from 'react';
import { contestEntries } from '@/lib/data/contestEntries';

export default function VotingPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [voted, setVoted] = useState<Set<number>>(new Set());

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
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #7B1800 0%, #C13A00 35%, #FF6820 65%, #FFB340 100%)' }}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]" style={{
        background: 'repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px)',
      }} />
      {/* Section header */}
      <div className="text-center mb-10 px-8 relative z-10">
        <div className="inline-block bg-transparent border border-white text-white text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4 opacity-90">
          🗳️ Votaciones
        </div>
        <h2
          className="font-display italic text-white mb-2"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textShadow: '0 2px 20px rgba(28,8,0,0.4)' }}
        >
          Vota por tu <span className="text-pizza-yellow">Favorita</span>
        </h2>
        <p className="max-w-[520px] mx-auto leading-[1.8] font-body text-[0.9rem]" style={{ color: 'rgba(255,240,220,0.85)' }}>
          La comunidad decide. Cada voto cuenta para determinar los ganadores.
        </p>
      </div>

      {/* Carousel frame */}
      <div
        className="mx-6 md:mx-auto max-w-6xl rounded-2xl overflow-hidden relative z-10"
        style={{
          border: '1px solid rgba(255,255,255,0.35)',
          background: '#FFF7EE',
          boxShadow: '0 8px 60px rgba(28,8,0,0.35), 0 0 40px rgba(255,255,255,0.1)',
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(232,194,128,0.3)]">
          <div className="flex items-center gap-3">
            <h3
              className="font-display italic text-pizza-dark leading-none"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
            >
              🗳️ Candidatas al concurso
            </h3>
            <span className="text-pizza-muted font-body text-[0.7rem] hidden sm:inline">
              {contestEntries.length} canciones
            </span>
          </div>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-orange hover:text-pizza-orange hover:bg-[rgba(255,104,32,0.08)] cursor-pointer"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full border border-pizza-border text-pizza-body bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-orange hover:text-pizza-orange hover:bg-[rgba(255,104,32,0.08)] cursor-pointer"
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
            style={{ background: 'linear-gradient(to right, #FFF7EE, transparent)' }}
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #FFF7EE, transparent)' }}
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
                className="flex-shrink-0 border rounded-xl p-5 transition-all duration-300 relative hover:border-pizza-orange hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,104,32,0.12)]"
                style={{
                  width: '280px',
                  scrollSnapAlign: 'start',
                  background: '#FFF7EE',
                  borderColor: 'rgba(232,194,128,0.4)',
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
                <div className="bg-pizza-raised rounded h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded transition-all duration-500"
                    style={{
                      width: `${entry.votePercent}%`,
                      background: 'linear-gradient(90deg, #FF6820, #FFD740)',
                    }}
                  />
                </div>

                {/* Count + button */}
                <div className="flex items-center justify-between">
                  <span className="text-[0.72rem] text-pizza-muted font-body">🗳️ {entry.votes} votos</span>
                  <button
                    onClick={() => toggleVote(entry.id)}
                    className={`px-3.5 py-1.5 rounded-[20px] font-accent text-[0.8rem] cursor-pointer transition-all duration-200 flex items-center gap-1.5 border ${
                      voted.has(entry.id)
                        ? 'bg-pizza-orange text-white border-pizza-orange'
                        : 'bg-transparent text-pizza-orange border-pizza-orange hover:bg-pizza-orange hover:text-white'
                    }`}
                  >
                    ❤️ {voted.has(entry.id) ? 'Votado' : 'Votar'}
                  </button>
                </div>
              </div>
            ))}

            {/* Placeholder CTA */}
            <div
              className="flex-shrink-0 border border-dashed border-pizza-border rounded-xl flex flex-col items-center justify-center text-center p-6 cursor-pointer transition-all duration-200 hover:border-pizza-orange hover:bg-[rgba(255,104,32,0.04)] group/cta"
              style={{ width: '200px', scrollSnapAlign: 'start', background: '#FFF7EE' }}
              onClick={() => window.dispatchEvent(new CustomEvent('openPostulationModal'))}
            >
              <div className="text-3xl mb-2 transition-transform duration-200 group-hover/cta:scale-110">🎤</div>
              <div className="font-display italic text-[0.95rem] text-pizza-muted mb-1 group-hover/cta:text-pizza-orange transition-colors">Tu canción aquí</div>
              <div className="text-[0.78rem] text-pizza-muted opacity-60 font-body group-hover/cta:opacity-100 transition-opacity">Postúlate al concurso</div>
            </div>
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-[rgba(232,194,128,0.25)]">
          <span className="text-[0.6rem] text-pizza-muted font-body uppercase tracking-[0.15em]">
            PizzaDAO Music Contest · 2026
          </span>
          <span className="text-[0.6rem] text-pizza-muted opacity-80 font-body uppercase tracking-[0.1em]">
            ⏳ Fecha límite: Abril 20
          </span>
        </div>
      </div>
    </section>
  );
}

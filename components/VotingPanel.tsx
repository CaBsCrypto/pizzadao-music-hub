'use client';

import { useState } from 'react';
import { contestEntries } from '@/lib/data/contestEntries';

export default function VotingPanel() {
  const [voted, setVoted] = useState<Set<number>>(new Set());

  const toggleVote = (id: number) => {
    setVoted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="votaciones" className="py-20 px-8 bg-[#0D0905]">
      <div className="text-center mb-12">
        <div className="inline-block bg-transparent border border-pizza-gold text-pizza-gold text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
          🗳️ Votaciones
        </div>
        <h2
          className="font-display italic text-pizza-cream mb-2"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textShadow: '0 0 40px rgba(201,162,39,0.12)' }}
        >
          Vota por tu Favorita
        </h2>
        <p className="text-[rgba(242,232,213,0.55)] max-w-[600px] mx-auto leading-[1.8] font-body text-[0.9rem]">
          Las canciones postuladas al concurso. La comunidad decide. Cada voto cuenta para determinar los ganadores.
        </p>
      </div>

      <div
        className="max-w-[1200px] mx-auto grid gap-6"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}
      >
        {contestEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-pizza-surface border border-pizza-border rounded-xl p-6 transition-all duration-300 relative hover:border-[rgba(201,162,39,0.35)] hover:-translate-y-0.5"
          >
            <div className="absolute top-4 right-4 font-display italic text-[1.4rem] text-pizza-gold opacity-[0.2]">
              #{entry.rank}
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-[50px] h-[50px] rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: entry.bgGradient }}
              >
                {entry.emoji}
              </div>
              <div className="flex-1">
                <div className="font-display italic text-pizza-cream mb-0.5 text-[0.95rem]">{entry.title}</div>
                <div className="text-[0.8rem] text-[rgba(242,232,213,0.45)] font-body">{entry.artist} · {entry.country}</div>
              </div>
            </div>

            {/* Vote bar */}
            <div className="bg-[#251808] rounded h-1.5 mb-3 overflow-hidden">
              <div
                className="h-full rounded transition-all duration-500"
                style={{
                  width: `${entry.votePercent}%`,
                  background: 'linear-gradient(90deg, #C9A227, #E8C547)',
                }}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[0.75rem] text-[rgba(242,232,213,0.4)] font-body">🗳️ {entry.votes} votos</span>
              <button
                onClick={() => toggleVote(entry.id)}
                className={`px-4 py-1.5 rounded-[20px] font-accent text-[0.85rem] cursor-pointer transition-all duration-200 flex items-center gap-1.5 border ${
                  voted.has(entry.id)
                    ? 'bg-pizza-gold text-pizza-dark border-pizza-gold'
                    : 'bg-transparent text-pizza-gold border-pizza-gold hover:bg-pizza-gold hover:text-pizza-dark'
                }`}
              >
                ❤️ {voted.has(entry.id) ? 'Votado' : 'Votar'}
              </button>
            </div>
          </div>
        ))}

        {/* Placeholder CTA */}
        <div className="border border-dashed border-pizza-border rounded-xl flex flex-col items-center justify-center min-h-[160px] text-center p-8 bg-[#130B05]">
          <div className="text-4xl mb-3">🎤</div>
          <div className="font-display italic text-[1.1rem] text-[rgba(242,232,213,0.4)] mb-1">Tu canción aquí</div>
          <div className="text-[0.85rem] text-[rgba(242,232,213,0.25)] font-body">Postúlate al concurso</div>
        </div>
      </div>
    </section>
  );
}

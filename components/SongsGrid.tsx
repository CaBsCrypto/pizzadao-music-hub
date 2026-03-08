'use client';

import { useRef, useState } from 'react';
import { songs } from '@/lib/data/songs';
import { Song } from '@/lib/types';
import VideoModal from '@/components/VideoModal';

export default function SongsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 520 : -520, behavior: 'smooth' });
  };

  return (
    <div>
    {selectedSong && <VideoModal song={selectedSong} onClose={() => setSelectedSong(null)} />}
    <section id="canciones" className="py-10 bg-[#0D0905]">

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
              🎵 Canciones PizzaDAO
            </h2>
            <span className="text-[rgba(242,232,213,0.3)] font-body text-[0.7rem] hidden sm:inline">14 tracks</span>
          </div>

          {/* Arrow buttons */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-7 h-7 rounded-full border border-[rgba(201,162,39,0.3)] text-pizza-gold bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-gold hover:bg-[rgba(201,162,39,0.08)] cursor-pointer"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-7 h-7 rounded-full border border-[rgba(201,162,39,0.3)] text-pizza-gold bg-transparent flex items-center justify-center text-xs transition-all hover:border-pizza-gold hover:bg-[rgba(201,162,39,0.08)] cursor-pointer"
              aria-label="Siguiente"
            >
              →
            </button>
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
            {songs.map((song, index) => (
              <div
                key={song.id}
                onClick={() => song.youtubeId && setSelectedSong(song)}
                className="rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,162,39,0.1)] flex-shrink-0"
                style={{
                  width: '180px',
                  scrollSnapAlign: 'start',
                  background: '#1A1208',
                  borderColor: song.lang === 'es' ? 'rgba(45,138,78,0.5)' : '#2E1E0E',
                  boxShadow: song.lang === 'es' ? '0 0 16px rgba(45,138,78,0.08)' : 'none',
                }}
              >
                {/* Cover */}
                <div className={`h-[105px] flex items-center justify-center relative overflow-hidden ${song.bgClass}`}>
                  <span className="text-4xl">{song.emoji}</span>
                  <div className="absolute inset-0 bg-[rgba(8,5,3,0.88)] flex items-center justify-center text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    ▶
                  </div>
                </div>

                {/* Info */}
                <div className="p-2">
                  <span className="font-body text-[0.55rem] text-pizza-gold uppercase tracking-[0.15em] mb-0.5 block opacity-70">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="font-display italic text-pizza-cream text-[0.82rem] mb-0.5 leading-snug"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
                  >{song.title}</div>
                  <div className="text-[0.65rem] text-[rgba(242,232,213,0.4)] mb-1.5 font-body truncate">{song.artist}</div>
                  <div className="flex justify-between items-center">
                    {song.lang === 'es' ? (
                      <span className="bg-[rgba(45,138,78,0.2)] text-[#5DD68B] text-[0.6rem] font-extrabold px-2 py-0.5 rounded-[8px] uppercase">
                        🇪🇸 ES
                      </span>
                    ) : (
                      <span className="bg-[rgba(201,162,39,0.1)] text-pizza-gold text-[0.6rem] font-extrabold px-2 py-0.5 rounded-[8px] uppercase">
                        🇺🇸 EN
                      </span>
                    )}
                    <span className="text-[0.7rem] text-pizza-gold opacity-40 font-body tabular-nums">{song.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-[rgba(201,162,39,0.08)]">
          <span className="text-[0.6rem] text-[rgba(201,162,39,0.35)] font-body uppercase tracking-[0.15em]">
            Rare Pizzas · Mixtape Volume 1 · 2022
          </span>
          <span className="text-[0.6rem] text-[rgba(201,162,39,0.25)] font-body uppercase tracking-[0.1em]">CC0</span>
        </div>
      </div>

    </section>
    </div>
  );
}

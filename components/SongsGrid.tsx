'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';
import { songs } from '@/lib/data/songs';
import { Song } from '@/lib/types';
import VideoModal from '@/components/VideoModal';

export default function SongsGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const { lang } = useLanguage();
  const T = translations[lang].songs;

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 520 : -520, behavior: 'smooth' });
  };

  return (
    <div>
    {selectedSong && <VideoModal song={selectedSong} onClose={() => setSelectedSong(null)} />}
    <section id="canciones" className="py-10 bg-pizza-bg relative overflow-hidden">
      {/* Frame decorativo */}
      <div
        className="mx-6 md:mx-auto max-w-6xl rounded-2xl overflow-hidden relative z-10"
        style={{
          border: '1px solid rgba(180,20,20,0.5)',
          background: '#FEFCF8',
          backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 19px, rgba(180,0,0,0.18) 19px, rgba(180,0,0,0.18) 40px), repeating-linear-gradient(90deg, transparent 0px, transparent 19px, rgba(180,0,0,0.18) 19px, rgba(180,0,0,0.18) 40px)`,
          boxShadow: '0 8px 48px rgba(0,0,0,0.5)',
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
            <span className="text-pizza-muted font-body text-[0.7rem] hidden sm:inline">{T.tracks}</span>
          </div>

          {/* Arrow buttons */}
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

        {/* Scroll area — transparent to show gingham */}
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
              background: 'transparent',
            }}
          >
            {songs.map((song, index) => (
              <div
                key={song.id}
                onClick={() => song.youtubeId && setSelectedSong(song)}
                className="rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(220,38,38,0.12)] flex-shrink-0"
                style={{
                  width: '180px',
                  scrollSnapAlign: 'start',
                  background: '#FEFCF8',
                  borderColor: song.lang === 'es' ? 'rgba(22,163,74,0.4)' : 'rgba(209,213,219,0.8)',
                  boxShadow: song.lang === 'es' ? '0 0 12px rgba(22,163,74,0.08)' : '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Cover */}
                <div className={`h-[105px] flex items-center justify-center relative overflow-hidden ${song.bgClass}`}>
                  <span className="text-4xl">{song.emoji}</span>
                  <div className="absolute inset-0 bg-[rgba(28,8,0,0.75)] flex items-center justify-center text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    ▶
                  </div>
                </div>

                {/* Info */}
                <div className="p-2">
                  <span className="font-body text-[0.55rem] text-pizza-red uppercase tracking-[0.15em] mb-0.5 block opacity-80">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <div
                    className="font-display italic text-pizza-dark text-[0.82rem] mb-0.5 leading-snug"
                    style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}
                  >{song.title}</div>
                  <div className="text-[0.65rem] text-pizza-muted mb-1.5 font-body truncate">{song.artist}</div>
                  <div className="flex justify-between items-center">
                    {song.lang === 'es' ? (
                      <span className="bg-[rgba(45,138,78,0.12)] text-[#1F7A3C] text-[0.6rem] font-extrabold px-2 py-0.5 rounded-[8px] uppercase">
                        🇪🇸 ES
                      </span>
                    ) : (
                      <span className="bg-[rgba(220,38,38,0.1)] text-pizza-red text-[0.6rem] font-extrabold px-2 py-0.5 rounded-[8px] uppercase">
                        🇺🇸 EN
                      </span>
                    )}
                    <span className="text-[0.7rem] text-pizza-muted font-body tabular-nums">{song.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between px-5 py-2 border-t border-pizza-border">
          <span className="text-[0.6rem] text-pizza-muted font-body uppercase tracking-[0.15em]">
            Rare Pizzas · Mixtape Volume 1 · 2022
          </span>
          <span className="text-[0.6rem] text-pizza-muted opacity-60 font-body uppercase tracking-[0.1em]">CC0</span>
        </div>
      </div>

    </section>
    </div>
  );
}

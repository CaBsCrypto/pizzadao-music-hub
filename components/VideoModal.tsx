'use client';

import { useEffect } from 'react';
import { Song } from '@/lib/types';

interface VideoModalProps {
  song: Song;
  onClose: () => void;
}

export default function VideoModal({ song, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.65)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(209,213,219,0.8)', boxShadow: '0 0 60px rgba(0,0,0,0.2), 0 40px 80px rgba(0,0,0,0.3)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: '#FFFFFF', borderBottom: '1px solid rgba(209,213,219,0.5)' }}
        >
          <div>
            <p className="font-body text-[0.6rem] text-pizza-red uppercase tracking-[0.15em] opacity-80">
              #{String(song.id).padStart(2, '0')} · Rare Pizzas
            </p>
            <p className="font-display italic text-pizza-dark text-sm leading-tight">{song.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-pizza-body border border-pizza-border hover:border-pizza-red hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)] transition-all cursor-pointer text-xs"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* YouTube iframe */}
        <div className="relative" style={{ paddingTop: '56.25%', background: '#1C0800' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1&rel=0`}
            title={song.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

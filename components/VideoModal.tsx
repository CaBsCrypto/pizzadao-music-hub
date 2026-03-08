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
      style={{ background: 'rgba(8,5,3,0.92)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(201,162,39,0.3)', boxShadow: '0 0 60px rgba(201,162,39,0.1)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3"
          style={{ background: '#120D07', borderBottom: '1px solid rgba(201,162,39,0.12)' }}
        >
          <div>
            <p className="font-body text-[0.6rem] text-pizza-gold uppercase tracking-[0.15em] opacity-60">
              #{String(song.id).padStart(2, '0')} · Rare Pizzas
            </p>
            <p className="font-display italic text-pizza-cream text-sm leading-tight">{song.title}</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-pizza-gold border border-[rgba(201,162,39,0.3)] hover:border-pizza-gold hover:bg-[rgba(201,162,39,0.08)] transition-all cursor-pointer text-xs"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        {/* YouTube iframe */}
        <div className="relative" style={{ paddingTop: '56.25%', background: '#0D0905' }}>
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

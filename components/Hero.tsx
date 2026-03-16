'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function Hero() {
  const { lang } = useLanguage();
  const T = translations[lang].hero;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[70px]"
      style={{
        background: '#F0F5EC',
      }}
    >
      {/* Floating background emojis */}
      <div className="absolute text-[12rem] opacity-[0.1] animate-float select-none top-[10%] left-[-5%]">🍕</div>
      <div className="absolute text-[8rem] opacity-[0.1] select-none top-[50%] right-[-5%]" style={{ animation: 'float 8s ease-in-out -3s infinite' }}>🎵</div>
      <div className="absolute text-[6rem] opacity-[0.1] select-none bottom-[5%] left-[30%]" style={{ animation: 'float 8s ease-in-out -5s infinite' }}>🎸</div>

      {/* Vinyl SVG decoration — burgundy palette */}
      <svg
        className="absolute right-[8%] top-1/2 w-[360px] h-[360px] opacity-[0.22] animate-spin-slow hidden lg:block"
        style={{ transform: 'translateY(-50%)' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" fill="#1E2A1A" stroke="#C9A227" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="160" fill="#2D3D26" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#566B45" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="80"  fill="none" stroke="#566B45" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60"  fill="#1E2A1A" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="20"  fill="#C9A227" />
        <circle cx="200" cy="200" r="6"   fill="#2D3D26" />
      </svg>

      {/* 🌍 Globe — bottom-left, partially cropped */}
      <div
        className="absolute bottom-[-70px] left-[-55px] pointer-events-none select-none hidden md:block"
        style={{ fontSize: '300px', lineHeight: 1, opacity: 0.65 }}
      >🌍</div>

      {/* 🎈 Hot air balloon + 🚌 Pizza bus — bottom-right */}
      <div className="absolute bottom-0 right-[3%] flex flex-col items-center pointer-events-none select-none hidden xl:flex">
        <div style={{ fontSize: '80px', animation: 'float 5s ease-in-out -1s infinite', marginBottom: '-10px' }}>🎈</div>
        <div style={{ fontSize: '96px', lineHeight: 1 }}>🚌</div>
      </div>

      {/* 🪂🍕 Parachute pizza — left side */}
      <div
        className="absolute left-[6%] top-[36%] flex flex-col items-center pointer-events-none select-none hidden lg:flex"
        style={{ animation: 'float 9s ease-in-out -4s infinite' }}
      >
        <div style={{ fontSize: '34px' }}>🪂</div>
        <div style={{ fontSize: '24px', marginTop: '-2px' }}>🍕</div>
      </div>


      <div className="text-center max-w-[800px] px-8 relative z-10">
        {/* Badge */}
        <div className="inline-block bg-transparent border border-pizza-red text-pizza-red text-xs font-body font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-[20px] mb-6 animate-pulse-badge">
          {T.badge}
        </div>

        {/* Title */}
        <h1
          className="font-display italic leading-none text-pizza-dark mb-2"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textShadow: '3px 3px 0 rgba(74,112,64,0.15)',
          }}
        >
          Pizza<span className="text-pizza-gold not-italic">DAO</span>
          <br />
          {T.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-accent mb-6 uppercase tracking-[0.25em] text-pizza-red"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}
        >
          Eat · Vibe · Create
        </p>

        {/* Description */}
        <p className="max-w-[540px] mx-auto mb-10 leading-[1.8] font-body text-[0.95rem] text-pizza-body">
          {T.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('canciones')}
            className="bg-pizza-red text-white px-8 py-3.5 rounded-full font-accent text-lg border border-pizza-red cursor-pointer transition-all hover:-translate-y-1 hover:bg-pizza-red-hover flex items-center gap-2 shadow-[0_4px_20px_rgba(74,112,64,0.3)]"
          >
            {T.btn1}
          </button>
          <button
            onClick={() => scrollTo('concurso')}
            className="px-8 py-3.5 rounded-full font-accent text-lg cursor-pointer transition-all hover:-translate-y-1 flex items-center gap-2"
            style={{ background: 'rgba(74,112,64,0.12)', color: '#2D2A1F', border: '1px solid rgba(74,112,64,0.4)' }}
          >
            {T.btn2}
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8" style={{ borderTop: '1px solid rgba(74,112,64,0.25)' }}>
          {[
            { num: '14',     label: T.statSongs  },
            { num: '$350',   label: T.statPrizes },
            { num: '∞',      label: T.statPizzas },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display italic text-[2.2rem] font-bold text-pizza-gold block">{num}</span>
              <span className="text-[0.75rem] uppercase tracking-[0.15em] font-body text-pizza-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      style={{ background: 'linear-gradient(160deg, #D4EDFA 0%, #9DCDE8 40%, #B8DCEE 100%)' }}
    >
      {/* Floating background emojis */}
      <div className="absolute text-[12rem] opacity-[0.14] animate-float select-none top-[10%] left-[-5%]">🍕</div>
      <div className="absolute text-[8rem] opacity-[0.14] select-none top-[50%] right-[-5%]" style={{ animation: 'float 8s ease-in-out -3s infinite' }}>🎵</div>
      <div className="absolute text-[6rem] opacity-[0.14] select-none bottom-[5%] left-[30%]" style={{ animation: 'float 8s ease-in-out -5s infinite' }}>🎸</div>

      {/* Vinyl SVG decoration */}
      <svg
        className="absolute right-[8%] top-1/2 w-[360px] h-[360px] opacity-[0.25] animate-spin-slow hidden lg:block"
        style={{ transform: 'translateY(-50%)' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" fill="#1E3A5F" stroke="#DC2626" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="160" fill="#2D5282" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#DC2626" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#4A7FC1" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#DC2626" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="80"  fill="none" stroke="#4A7FC1" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60"  fill="#1E3A5F" stroke="#DC2626" strokeWidth="0.5" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="20"  fill="#DC2626" />
        <circle cx="200" cy="200" r="6"   fill="#2D5282" />
      </svg>

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
            textShadow: '3px 3px 0 rgba(220,38,38,0.2), 0 0 60px rgba(168,212,234,0.4)',
          }}
        >
          Pizza<span className="text-pizza-gold not-italic">DAO</span>
          <br />
          {T.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-body font-light mb-6 uppercase tracking-[0.25em] text-pizza-body"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}
        >
          Eat · Vibe · Create
        </p>

        {/* Description */}
        <p className="max-w-[540px] mx-auto mb-10 leading-[1.8] font-body text-[0.95rem] text-pizza-muted">
          {T.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('canciones')}
            className="bg-pizza-red text-white px-8 py-3.5 rounded-full font-accent text-lg border-none cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] flex items-center gap-2 shadow-[0_4px_20px_rgba(220,38,38,0.25)]"
          >
            {T.btn1}
          </button>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-white text-pizza-body px-8 py-3.5 rounded-full font-accent text-lg cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center gap-2 border border-pizza-border shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
          >
            {T.btn2}
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8" style={{ borderTop: '1px solid rgba(209,213,219,0.6)' }}>
          {[
            { num: '14',     label: T.statSongs  },
            { num: '$1,500', label: T.statPrizes },
            { num: '∞',      label: T.statPizzas },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display italic text-[2rem] text-pizza-red block">{num}</span>
              <span className="text-[0.75rem] uppercase tracking-[0.15em] font-body text-pizza-muted">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

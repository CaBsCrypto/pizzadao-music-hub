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
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #C13A00 0%, #6B1800 40%, #2A0E04 80%)' }}
    >
      {/* Floating background emojis */}
      <div className="absolute text-[12rem] opacity-[0.06] animate-float select-none top-[10%] left-[-5%]">🍕</div>
      <div className="absolute text-[8rem] opacity-[0.06] select-none top-[50%] right-[-5%]" style={{ animation: 'float 8s ease-in-out -3s infinite' }}>🎵</div>
      <div className="absolute text-[6rem] opacity-[0.06] select-none bottom-[5%] left-[30%]" style={{ animation: 'float 8s ease-in-out -5s infinite' }}>🎸</div>

      {/* Vinyl SVG decoration */}
      <svg
        className="absolute right-[8%] top-1/2 w-[360px] h-[360px] opacity-[0.25] animate-spin-slow hidden lg:block"
        style={{ transform: 'translateY(-50%)' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" fill="#2A0E04" stroke="#FF6820" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="160" fill="#1C0800" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#FF6820" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#3D1A0A" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#FF6820" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="80"  fill="none" stroke="#3D1A0A" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60"  fill="#2A0E04" stroke="#FF6820" strokeWidth="0.5" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="20"  fill="#E8240A" />
        <circle cx="200" cy="200" r="6"   fill="#1C0800" />
      </svg>

      <div className="text-center max-w-[800px] px-8 relative z-10">
        {/* Badge */}
        <div className="inline-block bg-transparent border border-pizza-orange text-pizza-orange text-xs font-body font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-[20px] mb-6 animate-pulse-badge">
          {T.badge}
        </div>

        {/* Title */}
        <h1
          className="font-display italic leading-none text-pizza-cream mb-2"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textShadow: '3px 3px 0 rgba(232,36,10,0.4), 0 0 80px rgba(255,104,32,0.2)',
          }}
        >
          Pizza<span className="text-pizza-gold not-italic">DAO</span>
          <br />
          {T.title}
        </h1>

        {/* Subtitle */}
        <p
          className="font-body font-light mb-6 uppercase tracking-[0.25em]"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)', color: 'rgba(255,168,80,0.85)' }}
        >
          Eat · Vibe · Create
        </p>

        {/* Description */}
        <p className="max-w-[540px] mx-auto mb-10 leading-[1.8] font-body text-[0.95rem]" style={{ color: 'rgba(255,240,220,0.8)' }}>
          {T.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('canciones')}
            className="bg-pizza-orange text-white px-8 py-3.5 rounded-full font-accent text-lg border-none cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,104,32,0.5)] flex items-center gap-2 shadow-[0_4px_20px_rgba(255,104,32,0.3)]"
          >
            {T.btn1}
          </button>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-transparent text-pizza-cream px-8 py-3.5 rounded-full font-accent text-lg cursor-pointer transition-all hover:-translate-y-1 hover:bg-[rgba(255,247,238,0.15)] flex items-center gap-2"
            style={{ border: '1px solid rgba(255,247,238,0.6)' }}
          >
            {T.btn2}
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,168,80,0.2)' }}>
          {[
            { num: '14',     label: T.statSongs  },
            { num: '$1,500', label: T.statPrizes },
            { num: '∞',      label: T.statPizzas },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display italic text-[2rem] text-pizza-gold block">{num}</span>
              <span className="text-[0.75rem] uppercase tracking-[0.15em] font-body" style={{ color: 'rgba(255,240,220,0.6)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

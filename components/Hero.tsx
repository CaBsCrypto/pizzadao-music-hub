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
        background: 'linear-gradient(160deg, #7A0000 0%, #C01010 50%, #E03030 100%)',
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
        <circle cx="200" cy="200" r="198" fill="#3D0C0C" stroke="#C8281E" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="160" fill="#5C1A1A" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#C8281E" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#8B3A3A" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#C8281E" strokeWidth="0.5" strokeOpacity="0.25" />
        <circle cx="200" cy="200" r="80"  fill="none" stroke="#8B3A3A" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60"  fill="#3D0C0C" stroke="#C8281E" strokeWidth="0.5" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="20"  fill="#C8281E" />
        <circle cx="200" cy="200" r="6"   fill="#5C1A1A" />
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

      {/* 🎊 Confetti dots — warm + one sky blue touch */}
      {[
        { top: '20%', left: '20%', color: '#C8281E', w: 8,  h: 13 },
        { top: '30%', left: '76%', color: '#F5C235', w: 10, h: 6  },
        { top: '44%', left: '11%', color: '#F5C235', w: 7,  h: 12 },
        { top: '58%', left: '86%', color: '#C8281E', w: 9,  h: 6  },
        { top: '24%', left: '63%', color: '#F5C235', w: 6,  h: 11 },
        { top: '70%', left: '30%', color: '#C8281E', w: 8,  h: 5  },
        { top: '38%', left: '90%', color: '#F5C235', w: 6,  h: 10 },
        { top: '15%', left: '42%', color: '#C8281E', w: 7,  h: 7  },
        { top: '80%', left: '55%', color: '#F5C235', w: 9,  h: 5  },
        { top: '35%', left: '52%', color: '#5BB8E0', w: 6,  h: 10 },
      ].map((c, i) => (
        <div
          key={i}
          className="absolute rounded-sm pointer-events-none"
          style={{
            top: c.top, left: c.left,
            width: c.w, height: c.h,
            background: c.color,
            opacity: 0.45,
            transform: `rotate(${i * 23}deg)`,
          }}
        />
      ))}

      <div className="text-center max-w-[800px] px-8 relative z-10">
        {/* Badge */}
        <div className="inline-block bg-transparent border border-pizza-red text-pizza-red text-xs font-body font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-[20px] mb-6 animate-pulse-badge">
          {T.badge}
        </div>

        {/* Title */}
        <h1
          className="font-display italic leading-none text-white mb-2"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textShadow: '3px 3px 0 rgba(224,48,48,0.25)',
          }}
        >
          Pizza<span className="text-pizza-gold not-italic">DAO</span>
          <br />
          {T.title}
        </h1>

        {/* Italian tricolor stripe */}
        <div style={{
          width: 60, height: 4, borderRadius: 2,
          margin: '14px auto 6px',
          background: 'linear-gradient(to right, #1A6B3A 33.3%, rgba(255,248,240,0.7) 33.3% 66.6%, #E03030 66.6%)',
        }} />

        {/* Subtitle */}
        <p
          className="font-accent mb-6 uppercase tracking-[0.25em]"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)', color: 'rgba(255,220,200,0.9)' }}
        >
          Eat · Vibe · Create
        </p>

        {/* Description */}
        <p className="max-w-[540px] mx-auto mb-10 leading-[1.8] font-body text-[0.95rem]" style={{ color: 'rgba(240,208,192,0.8)' }}>
          {T.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('canciones')}
            className="bg-white text-pizza-red px-8 py-3.5 rounded-full font-accent text-lg border border-white cursor-pointer transition-all hover:-translate-y-1 hover:bg-pizza-red hover:text-white flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          >
            {T.btn1}
          </button>
          <button
            onClick={() => scrollTo('concurso')}
            className="px-8 py-3.5 rounded-full font-accent text-lg cursor-pointer transition-all hover:-translate-y-1 flex items-center gap-2"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            {T.btn2}
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8" style={{ borderTop: '1px solid rgba(224,48,48,0.3)' }}>
          {[
            { num: '14',     label: T.statSongs  },
            { num: '$350',   label: T.statPrizes },
            { num: '∞',      label: T.statPizzas },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display italic text-[2.2rem] font-bold text-pizza-red block">{num}</span>
              <span className="text-[0.75rem] uppercase tracking-[0.15em] font-body" style={{ color: 'rgba(240,208,192,0.7)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

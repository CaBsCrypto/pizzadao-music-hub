'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function GameSection() {
  const { lang } = useLanguage();
  const T = translations[lang].game;

  return (
    <section id="game" className="py-20 px-8 bg-pizza-dark-bg relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(180,20,20,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(180,20,20,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-transparent border border-pizza-red text-pizza-red text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
            {T.badge}
          </div>
          <h2
            className="font-display italic text-pizza-cream mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 0 40px rgba(180,20,20,0.2)' }}
          >
            Rhythm <span className="text-pizza-red">Slice</span>
          </h2>
          <p className="font-body text-[0.85rem] uppercase tracking-[0.2em]" style={{ color: 'rgba(232,208,184,0.7)' }}>
            Guitar Hero × PizzaDAO
          </p>
        </div>

        {/* Controls hint */}
        <div
          className="flex flex-col items-center gap-3 mb-5 px-6 py-4 rounded-2xl"
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {/* Keys row */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="font-body text-[0.7rem] uppercase tracking-[0.2em]" style={{ color: 'rgba(232,208,184,0.65)' }}>
              Controles:
            </span>
            {['A', 'S', 'K', 'L'].map((key) => (
              <kbd
                key={key}
                className="font-body font-bold text-[0.8rem] px-3 py-1.5 rounded-md"
                style={{
                  background: 'rgba(245,158,11,0.12)',
                  border: '1px solid rgba(245,158,11,0.45)',
                  color: '#FCD34D',
                  boxShadow: '0 3px 0 rgba(0,0,0,0.5)',
                  letterSpacing: '0.05em',
                }}
              >
                {key}
              </kbd>
            ))}
            <span className="font-body text-[0.7rem] uppercase tracking-[0.15em]" style={{ color: 'rgba(232,208,184,0.5)' }}>
              — 4 carriles
            </span>
          </div>
          {/* Warning row */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full"
            style={{ background: 'rgba(180,20,20,0.12)', border: '1px solid rgba(180,20,20,0.35)' }}
          >
            <span className="text-sm">⚠️</span>
            <span className="font-body text-[0.7rem] uppercase tracking-[0.15em]" style={{ color: 'rgba(232,208,184,0.9)' }}>
              Solo las 🍕 pizzas cuentan — ¡cuidado con lo demás!
            </span>
          </div>
        </div>

        {/* Game iframe */}
        <div
          className="w-full max-w-4xl rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(180,20,20,0.4)',
            background: '#0E0605',
            boxShadow: '0 0 60px rgba(180,20,20,0.15), 0 30px 80px rgba(0,0,0,0.4)',
            height: '600px',
          }}
        >
          <iframe
            src="https://cabscrypto.github.io/guitarPizza--AntiGravity/?embed=1"
            className="w-full h-full border-0"
            title="Rhythm Slice — Guitar Hero × PizzaDAO"
            allow="autoplay"
          />
        </div>

        <p className="mt-6 text-[0.8rem] font-body text-center max-w-[400px] leading-relaxed tracking-[0.03em]" style={{ color: 'rgba(210,240,180,0.6)' }}>
          {T.description}
        </p>
      </div>
    </section>
  );
}

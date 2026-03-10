'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const T = translations[lang].footer;

  return (
    <footer className="bg-pizza-dark-bg border-t border-pizza-dark-border px-8 py-12 text-center">
      <div className="font-accent text-[1.8rem] text-pizza-cream mb-2 tracking-wide">🍕 PizzaDAO Music</div>
      {/* Tricolor stripe */}
      <div style={{ width: 60, height: 4, borderRadius: 2, margin: '0 auto 20px', background: 'linear-gradient(to right, #1A6B3A 33.3%, rgba(255,248,240,0.5) 33.3% 66.6%, #C8281E 66.6%)' }} />
      <p className="text-[0.85rem] max-w-[380px] mx-auto mb-8 font-body leading-relaxed tracking-[0.03em]" style={{ color: 'rgba(255,220,200,0.55)' }}>
        {T.description}
      </p>
      <div className="flex justify-center gap-8 flex-wrap mb-8">
        {T.links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="no-underline text-[0.8rem] font-body uppercase tracking-[0.1em] transition-colors hover:text-pizza-red"
            style={{ color: 'rgba(255,220,200,0.45)' }}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <a
          href="https://creativecommons.org/publicdomain/zero/1.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-body uppercase tracking-[0.1em] transition-colors hover:border-pizza-red hover:text-pizza-red"
          style={{ border: '1px solid rgba(200,100,100,0.35)', color: 'rgba(255,220,200,0.45)' }}
        >
          <span className="text-[0.85rem]">🄯</span> CC0 · No Rights Reserved
        </a>
        <p className="text-[0.65rem] font-body tracking-[0.05em] uppercase" style={{ color: 'rgba(255,220,200,0.25)' }}>
          {T.copy}
        </p>
      </div>
    </footer>
  );
}

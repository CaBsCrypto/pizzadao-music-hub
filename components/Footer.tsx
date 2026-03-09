'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function Footer() {
  const { lang } = useLanguage();
  const T = translations[lang].footer;

  return (
    <footer className="bg-pizza-dark-bg border-t border-[rgba(255,104,32,0.2)] px-8 py-12 text-center">
      <div className="font-accent text-[1.8rem] text-pizza-cream mb-2 tracking-wide">🍕 PizzaDAO Music</div>
      <p className="text-[0.85rem] max-w-[380px] mx-auto mb-8 font-body leading-relaxed tracking-[0.03em]" style={{ color: 'rgba(255,240,220,0.5)' }}>
        {T.description}
      </p>
      <div className="flex justify-center gap-8 flex-wrap mb-8">
        {T.links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="no-underline text-[0.8rem] font-body uppercase tracking-[0.1em] transition-colors hover:text-pizza-orange"
            style={{ color: 'rgba(255,240,220,0.4)' }}
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
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.7rem] font-body uppercase tracking-[0.1em] transition-colors hover:border-pizza-orange hover:text-pizza-orange"
          style={{ border: '1px solid rgba(255,104,32,0.2)', color: 'rgba(255,240,220,0.4)' }}
        >
          <span className="text-[0.85rem]">🄯</span> CC0 · No Rights Reserved
        </a>
        <p className="text-[0.65rem] font-body tracking-[0.05em] uppercase" style={{ color: 'rgba(255,240,220,0.2)' }}>
          {T.copy}
        </p>
      </div>
    </footer>
  );
}

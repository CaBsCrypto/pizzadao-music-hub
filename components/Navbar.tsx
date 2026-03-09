'use client';

import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const T = translations[lang].nav;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-[rgba(255,255,255,0.96)] backdrop-blur-[10px] border-b border-[rgba(209,213,219,0.7)] px-8 flex items-center justify-between h-[70px] shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-2.5 font-accent text-2xl text-pizza-dark bg-transparent border-none cursor-pointer"
      >
        🍕 <span className="text-pizza-red">Pizza</span>DAO{' '}
        <span className="text-pizza-muted text-base ml-1">Music</span>
      </button>

      <ul className="hidden md:flex gap-6 list-none items-center">
        {([
          { label: T.songs,   id: 'canciones'  },
          { label: T.contest, id: 'concurso'   },
          { label: T.voting,  id: 'votaciones' },
          { label: T.events,  id: 'eventos'    },
        ] as const).map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-pizza-body font-body font-semibold text-sm uppercase tracking-[0.08em] px-2.5 py-1.5 rounded bg-transparent border-none cursor-pointer transition-colors hover:text-pizza-red hover:bg-[rgba(220,38,38,0.08)]"
            >
              {label}
            </button>
          </li>
        ))}

        {/* Language toggle */}
        <li>
          <div className="flex items-center gap-0.5 bg-pizza-raised border border-pizza-border rounded-full p-0.5">
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-[0.7rem] font-body font-extrabold uppercase tracking-[0.06em] cursor-pointer transition-all border-none ${
                lang === 'es'
                  ? 'bg-pizza-red text-white shadow-sm'
                  : 'bg-transparent text-pizza-muted hover:text-pizza-body'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-[0.7rem] font-body font-extrabold uppercase tracking-[0.06em] cursor-pointer transition-all border-none ${
                lang === 'en'
                  ? 'bg-pizza-red text-white shadow-sm'
                  : 'bg-transparent text-pizza-muted hover:text-pizza-body'
              }`}
            >
              EN
            </button>
          </div>
        </li>

        <li>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-transparent text-pizza-red font-body font-bold text-sm uppercase tracking-[0.08em] px-4 py-1.5 rounded-[20px] border border-pizza-red cursor-pointer transition-all hover:bg-pizza-red hover:text-white"
          >
            {T.cta}
          </button>
        </li>
      </ul>
    </nav>
  );
}

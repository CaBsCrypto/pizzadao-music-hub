'use client';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-[rgba(255,247,238,0.96)] backdrop-blur-[10px] border-b border-[rgba(232,194,128,0.5)] px-8 flex items-center justify-between h-[70px] shadow-[0_2px_20px_rgba(107,56,16,0.08)]">
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-2.5 font-accent text-2xl text-pizza-dark bg-transparent border-none cursor-pointer"
      >
        🍕 <span className="text-pizza-orange">Pizza</span>DAO{' '}
        <span className="text-pizza-muted text-base ml-1">Music</span>
      </button>

      <ul className="hidden md:flex gap-6 list-none">
        {[
          { label: '🎵 Canciones', id: 'canciones' },
          { label: '🏆 Concurso', id: 'concurso' },
          { label: '🗳️ Votaciones', id: 'votaciones' },
          { label: '📍 Eventos', id: 'eventos' },
        ].map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className="text-pizza-body font-body font-semibold text-sm uppercase tracking-[0.08em] px-2.5 py-1.5 rounded bg-transparent border-none cursor-pointer transition-colors hover:text-pizza-orange hover:bg-[rgba(255,104,32,0.08)]"
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-transparent text-pizza-orange font-body font-bold text-sm uppercase tracking-[0.08em] px-4 py-1.5 rounded-[20px] border border-pizza-orange cursor-pointer transition-all hover:bg-pizza-orange hover:text-white"
          >
            Participar
          </button>
        </li>
      </ul>
    </nav>
  );
}

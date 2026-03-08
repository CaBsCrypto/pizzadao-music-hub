'use client';

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] bg-[rgba(8,5,3,0.97)] backdrop-blur-[10px] border-b border-pizza-gold px-8 flex items-center justify-between h-[70px]">
      <button
        onClick={() => scrollTo('hero')}
        className="flex items-center gap-2.5 font-accent text-2xl text-pizza-cream bg-transparent border-none cursor-pointer"
      >
        🍕 <span className="text-pizza-gold">Pizza</span>DAO{' '}
        <span className="text-[rgba(201,162,39,0.7)] text-base ml-1">Music</span>
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
              className="text-[rgba(242,232,213,0.7)] font-body font-semibold text-sm uppercase tracking-[0.08em] px-2.5 py-1.5 rounded bg-transparent border-none cursor-pointer transition-colors hover:text-pizza-gold hover:bg-[rgba(201,162,39,0.08)]"
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-transparent text-pizza-gold font-body font-bold text-sm uppercase tracking-[0.08em] px-4 py-1.5 rounded-[20px] border border-pizza-gold cursor-pointer transition-all hover:bg-pizza-gold hover:text-pizza-dark"
          >
            Participar
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default function Footer() {
  const links = [
    { label: 'PizzaDAO.com', href: '#' },
    { label: 'Música Web3',  href: '#' },
    { label: 'Twitter',      href: '#' },
    { label: 'Discord',      href: '#' },
    { label: 'Bases del Concurso', href: '#' },
  ];

  return (
    <footer className="bg-[#050302] border-t border-[rgba(201,162,39,0.2)] px-8 py-12 text-center">
      <div className="font-accent text-[1.8rem] text-pizza-cream mb-2 tracking-wide">🍕 PizzaDAO Music</div>
      <p className="text-[0.85rem] text-[rgba(242,232,213,0.4)] max-w-[380px] mx-auto mb-8 font-body leading-relaxed tracking-[0.03em]">
        La plataforma oficial de música de PizzaDAO. Construida por la comunidad, para la comunidad.
      </p>
      <div className="flex justify-center gap-8 flex-wrap mb-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[rgba(242,232,213,0.35)] no-underline text-[0.8rem] font-body uppercase tracking-[0.1em] transition-colors hover:text-pizza-gold"
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
          className="inline-flex items-center gap-2 border border-[rgba(242,232,213,0.12)] rounded-full px-4 py-1.5 text-[0.7rem] text-[rgba(242,232,213,0.35)] font-body uppercase tracking-[0.1em] transition-colors hover:border-pizza-gold hover:text-pizza-gold"
        >
          <span className="text-[0.85rem]">🄯</span> CC0 · No Rights Reserved
        </a>
        <p className="text-[0.65rem] text-[rgba(242,232,213,0.15)] font-body tracking-[0.05em] uppercase">
          2025 PizzaDAO Music Hub · Construido con 🍕 y Web3
        </p>
      </div>
    </footer>
  );
}

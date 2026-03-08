'use client';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[70px]"
      style={{ background: 'radial-gradient(ellipse at 30% 50%, #2A1808 0%, #080503 70%)' }}
    >
      {/* Floating background emojis */}
      <div className="absolute text-[12rem] opacity-[0.025] animate-float select-none top-[10%] left-[-5%]">🍕</div>
      <div className="absolute text-[8rem] opacity-[0.025] select-none top-[50%] right-[-5%]" style={{ animation: 'float 8s ease-in-out -3s infinite' }}>🎵</div>
      <div className="absolute text-[6rem] opacity-[0.025] select-none bottom-[5%] left-[30%]" style={{ animation: 'float 8s ease-in-out -5s infinite' }}>🎸</div>

      {/* Vinyl SVG decoration — gold-tinted grooves */}
      <svg
        className="absolute right-[8%] top-1/2 w-[360px] h-[360px] opacity-[0.2] animate-spin-slow hidden lg:block"
        style={{ transform: 'translateY(-50%)' }}
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="198" fill="#0a0705" stroke="#C9A227" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="200" cy="200" r="160" fill="#080503" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="#1a1208" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.2" />
        <circle cx="200" cy="200" r="80"  fill="none" stroke="#1a1208" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="60"  fill="#130B05" stroke="#C9A227" strokeWidth="0.5" strokeOpacity="0.3" />
        <circle cx="200" cy="200" r="20"  fill="#D4171A" />
        <circle cx="200" cy="200" r="6"   fill="#080503" />
      </svg>

      <div className="text-center max-w-[800px] px-8 relative z-10">
        {/* Badge */}
        <div className="inline-block bg-transparent border border-pizza-gold text-pizza-gold text-xs font-body font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-[20px] mb-6 animate-pulse-badge">
          🌎 La música de la comunidad Web3
        </div>

        {/* Title — Playfair Display italic */}
        <h1
          className="font-display italic leading-none text-pizza-cream mb-2"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            textShadow: '3px 3px 0 rgba(212,23,26,0.35), 0 0 60px rgba(201,162,39,0.12)',
          }}
        >
          Pizza<span className="text-pizza-gold not-italic">DAO</span>
          <br />
          Music Hub 🎵
        </h1>

        {/* Subtitle */}
        <p
          className="font-body font-light text-[rgba(201,162,39,0.75)] mb-6 uppercase tracking-[0.25em]"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)' }}
        >
          Eat · Vibe · Create · DAO
        </p>

        {/* Description */}
        <p className="text-[rgba(242,232,213,0.65)] max-w-[540px] mx-auto mb-10 leading-[1.8] font-body text-[0.95rem]">
          El espacio oficial de la música de PizzaDAO. Escucha las canciones de la comunidad, participa en el primer concurso en español y vota por tus favoritas.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollTo('canciones')}
            className="bg-pizza-red text-pizza-cream px-8 py-3.5 rounded-full font-accent text-lg border-none cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,23,26,0.4)] flex items-center gap-2 shadow-[0_4px_20px_rgba(212,23,26,0.25)]"
          >
            🎵 Escuchar Canciones
          </button>
          <button
            onClick={() => scrollTo('concurso')}
            className="bg-transparent text-pizza-gold px-8 py-3.5 rounded-full font-accent text-lg border border-pizza-gold cursor-pointer transition-all hover:-translate-y-1 hover:bg-pizza-gold hover:text-pizza-dark flex items-center gap-2"
          >
            🏆 Participar en el Concurso
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 mt-12 pt-8 border-t border-[rgba(201,162,39,0.15)]">
          {[
            { num: '14',    label: 'Canciones' },
            { num: '$1,500', label: 'En premios' },
            { num: '∞',     label: 'Pizzas' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <span className="font-display italic text-[2rem] text-pizza-gold block">{num}</span>
              <span className="text-[0.75rem] text-[rgba(242,232,213,0.5)] uppercase tracking-[0.15em] font-body">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

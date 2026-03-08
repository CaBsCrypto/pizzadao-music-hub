export default function GameSection() {
  return (
    <section id="game" className="py-20 px-8 bg-[#060402] relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,162,39,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-transparent border border-[rgba(201,162,39,0.4)] text-pizza-gold text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
            🎮 Mini Game
          </div>
          <h2
            className="font-display italic text-pizza-cream mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 0 40px rgba(201,162,39,0.12)' }}
          >
            Rhythm <span className="text-pizza-gold">Slice</span>
          </h2>
          <p className="text-[rgba(201,162,39,0.6)] font-body text-[0.85rem] uppercase tracking-[0.2em]">
            Guitar Hero × PizzaDAO
          </p>
        </div>

        {/* Game iframe */}
        <div
          className="w-full max-w-4xl rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(201,162,39,0.25)',
            background: '#0A0705',
            boxShadow: '0 0 60px rgba(201,162,39,0.06), 0 30px 80px rgba(0,0,0,0.6)',
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

        <p className="mt-6 text-[0.8rem] text-[rgba(242,232,213,0.3)] font-body text-center max-w-[400px] leading-relaxed tracking-[0.03em]">
          Corta las notas al ritmo de la música de PizzaDAO y sube tu score en el ranking de la comunidad.
        </p>
      </div>
    </section>
  );
}

export default function GameSection() {
  return (
    <section id="game" className="py-20 px-8 bg-pizza-dark-bg relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,104,32,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,104,32,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-transparent border border-[rgba(255,104,32,0.5)] text-pizza-orange text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
            🎮 Mini Game
          </div>
          <h2
            className="font-display italic text-pizza-cream mb-2"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textShadow: '0 0 40px rgba(255,104,32,0.2)' }}
          >
            Rhythm <span className="text-pizza-orange">Slice</span>
          </h2>
          <p className="font-body text-[0.85rem] uppercase tracking-[0.2em]" style={{ color: 'rgba(255,104,32,0.75)' }}>
            Guitar Hero × PizzaDAO
          </p>
        </div>

        {/* Game iframe */}
        <div
          className="w-full max-w-4xl rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(255,104,32,0.3)',
            background: '#1C0800',
            boxShadow: '0 0 60px rgba(255,104,32,0.08), 0 30px 80px rgba(28,8,0,0.7)',
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

        <p className="mt-6 text-[0.8rem] font-body text-center max-w-[400px] leading-relaxed tracking-[0.03em]" style={{ color: 'rgba(255,240,220,0.5)' }}>
          Corta las notas al ritmo de la música de PizzaDAO y sube tu score en el ranking de la comunidad.
        </p>
      </div>
    </section>
  );
}

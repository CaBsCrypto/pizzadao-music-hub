export default function GameSection() {
  // 5 lanes: colors + static note positions (top % within the lanes area)
  const lanes = [
    { color: '#D4171A', noteTop: '28%' },
    { color: '#C9A227', noteTop: '52%' },
    { color: '#D4171A', noteTop: '18%' },
    { color: '#E8C547', noteTop: '43%' },
    { color: '#C9A227', noteTop: '63%' },
  ];

  const laneColors = ['#0D0B08', '#100C06', '#0D0B08', '#100C06', '#0D0B08'];

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

        {/* Phone frame */}
        <div className="relative">
          {/* Power button right */}
          <div className="absolute right-[-8px] top-[120px] w-[4px] h-12 bg-[#2E1E0E] rounded-l-sm" />
          {/* Volume buttons left */}
          <div className="absolute left-[-8px] top-[100px] w-[4px] h-8 bg-[#2E1E0E] rounded-r-sm" />
          <div className="absolute left-[-8px] top-[140px] w-[4px] h-8 bg-[#2E1E0E] rounded-r-sm" />

          {/* Chassis */}
          <div
            className="w-[300px] relative"
            style={{
              height: '580px',
              borderRadius: '44px',
              border: '7px solid #2E1E0E',
              background: '#1A1208',
              boxShadow: '0 0 0 1px rgba(201,162,39,0.12), 0 30px 80px rgba(0,0,0,0.7), inset 0 0 20px rgba(201,162,39,0.04)',
            }}
          >
            {/* Notch / camera pill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              <div className="w-14 h-5 bg-[#0A0705] rounded-full flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#1A1208]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#221810] opacity-50" />
              </div>
            </div>

            {/* Screen */}
            <div
              className="absolute inset-[6px] overflow-hidden flex flex-col"
              style={{ borderRadius: '38px', background: '#060402' }}
            >
              {/* Score bar */}
              <div className="flex items-center justify-between px-5 pt-10 pb-2 flex-shrink-0 bg-[#0A0705]">
                <div className="text-center">
                  <div className="font-body text-[0.45rem] text-[rgba(242,232,213,0.4)] uppercase tracking-[0.2em]">SCORE</div>
                  <div className="font-display italic text-pizza-gold text-[1.1rem] leading-tight">000</div>
                </div>
                <div className="text-center">
                  <div className="font-body text-[0.45rem] text-[rgba(242,232,213,0.4)] uppercase tracking-[0.2em]">NIVEL</div>
                  <div className="font-display italic text-pizza-cream text-[1.1rem] leading-tight">1</div>
                </div>
                <div className="text-center">
                  <div className="font-body text-[0.45rem] text-[rgba(242,232,213,0.4)] uppercase tracking-[0.2em]">COMBO</div>
                  <div className="font-display italic text-pizza-red text-[1.1rem] leading-tight">x1</div>
                </div>
              </div>

              {/* Lanes area */}
              <div className="flex-1 relative flex">
                {lanes.map((lane, i) => (
                  <div
                    key={i}
                    className="flex-1 relative"
                    style={{
                      background: laneColors[i],
                      borderRight: i < lanes.length - 1 ? '1px solid rgba(201,162,39,0.08)' : 'none',
                    }}
                  >
                    {/* Static note */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        top: lane.noteTop,
                        background: lane.color,
                        boxShadow: `0 0 10px ${lane.color}88`,
                      }}
                    >
                      <span className="text-[0.55rem]">🍕</span>
                    </div>
                  </div>
                ))}

                {/* Hit line */}
                <div
                  className="absolute left-0 right-0 h-px"
                  style={{
                    top: '78%',
                    background: 'rgba(201,162,39,0.55)',
                    boxShadow: '0 0 8px rgba(201,162,39,0.5), 0 0 20px rgba(201,162,39,0.2)',
                  }}
                />
              </div>

              {/* Bottom tap buttons */}
              <div className="flex items-center justify-around px-3 py-2 bg-[#0A0705] flex-shrink-0">
                {lanes.map((lane, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      border: `2px solid ${lane.color}`,
                      background: `${lane.color}18`,
                    }}
                  >
                    <span className="text-[0.65rem]">🍕</span>
                  </div>
                ))}
              </div>

              {/* Coming Soon overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
                style={{
                  background: 'rgba(6,4,2,0.82)',
                  backdropFilter: 'blur(2px)',
                }}
              >
                <div className="text-5xl">🎮</div>
                <div
                  className="font-display italic text-pizza-gold text-center leading-tight"
                  style={{ fontSize: '1.4rem', textShadow: '0 0 30px rgba(201,162,39,0.4)' }}
                >
                  Rhythm Slice
                </div>
                <div className="inline-block bg-transparent border border-pizza-gold text-pizza-gold text-[0.6rem] font-body font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-[20px]">
                  🍕 Próximamente
                </div>
                <p className="text-[0.65rem] text-[rgba(242,232,213,0.35)] font-body text-center max-w-[160px] leading-relaxed">
                  Un juego de ritmo para la comunidad PizzaDAO
                </p>
              </div>
            </div>

            {/* Home indicator */}
            <div
              className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full"
              style={{ width: '56px', height: '4px', background: 'rgba(201,162,39,0.25)' }}
            />
          </div>
        </div>

        {/* Below-frame text */}
        <p className="mt-8 text-[0.8rem] text-[rgba(242,232,213,0.3)] font-body text-center max-w-[340px] leading-relaxed tracking-[0.03em]">
          Rhythm Slice llegará pronto. Corta las notas al ritmo de la música de PizzaDAO y sube tu score en el ranking de la comunidad.
        </p>
      </div>
    </section>
  );
}

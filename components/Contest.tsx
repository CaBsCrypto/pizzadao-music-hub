'use client';

import { useState } from 'react';

const prizes = [
  { medal: '🥇', place: '1er Lugar', desc: 'Mejor canción original en español', amount: '$500', coin: 'USDC', style: 'gold' },
  { medal: '🥈', place: '2do Lugar', desc: 'Segundo mejor track',               amount: '$300', coin: 'USDC', style: 'silver' },
  { medal: '🥉', place: '3er Lugar', desc: 'Tercer mejor track',                amount: '$200', coin: 'USDC', style: 'bronze' },
];

const prizeStyles: Record<string, { border: string; color: string; shadow: string }> = {
  gold:   { border: '#C9A227', color: '#C9A227', shadow: '0 0 24px rgba(201,162,39,0.12)' },
  silver: { border: '#9A9A9A', color: '#B8B8B8', shadow: '0 0 16px rgba(180,180,180,0.06)' },
  bronze: { border: '#A0632A', color: '#C07840', shadow: '0 0 16px rgba(160,99,42,0.08)' },
};

const rules = [
  'La canción debe ser original y en idioma español',
  'Temática: pizza, comunidad Web3, PizzaDAO, celebración',
  'Duración mínima de 2 minutos y máxima de 6 minutos',
  'Postular mediante link a plataforma de streaming (SoundCloud, Spotify, YouTube)',
  'Un artista puede postular máximo 2 canciones',
  'Los derechos de la canción permanecen con el artista',
  'El artista autoriza a PizzaDAO a usar la canción en eventos y promoción',
  'Resultados determinados por votación comunitaria + jurado PizzaDAO',
];

const countries = ['Argentina', 'Chile', 'Colombia', 'México', 'Perú', 'Venezuela', 'España', 'Otro'];

export default function Contest() {
  const [form, setForm] = useState({ artist: '', song: '', link: '', wallet: '', country: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Postulación recibida! Te contactaremos pronto. 🍕');
    setForm({ artist: '', song: '', link: '', wallet: '', country: '' });
  };

  return (
    <section id="concurso" className="py-20 px-8 relative overflow-hidden bg-[#080503]">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,162,39,0.012) 40px, rgba(201,162,39,0.012) 41px)',
          zIndex: 0,
        }}
      />
      {/* Giant pizza watermark */}
      <div className="absolute text-[30rem] opacity-[0.02] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        🍕
      </div>

      <div className="text-center mb-12 relative z-10">
        <div className="inline-block bg-transparent border border-pizza-gold text-pizza-gold text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
          🔥 Nuevo
        </div>
        <h2
          className="font-display italic text-pizza-cream mb-2"
          style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', textShadow: '0 0 40px rgba(201,162,39,0.12)' }}
        >
          Concurso en Español 🎤
        </h2>
        <p className="text-[rgba(242,232,213,0.55)] max-w-[600px] mx-auto leading-[1.8] font-body text-[0.9rem]">
          PizzaDAO busca a los mejores artistas en español de LATAM. Crea una canción original, postúlala y gana premios en stablecoins.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid gap-12 md:grid-cols-2 items-start relative z-10">
        {/* Prizes */}
        <div>
          <h3 className="font-display italic text-[1.6rem] text-pizza-cream mb-6 tracking-wide">💰 Premios</h3>
          {prizes.map((p) => {
            const s = prizeStyles[p.style];
            return (
              <div
                key={p.place}
                className="rounded-xl p-6 mb-4 flex items-center gap-6 border transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5"
                style={{ background: '#1A1208', borderColor: s.border, boxShadow: s.shadow }}
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ background: 'repeating-linear-gradient(45deg,transparent,transparent 10px,rgba(255,255,255,0.1) 10px,rgba(255,255,255,0.1) 20px)' }}
                />
                <span className="text-5xl relative z-10">{p.medal}</span>
                <div className="flex-1 relative z-10">
                  <div className="font-display italic text-lg mb-1" style={{ color: s.color }}>{p.place}</div>
                  <div className="text-[0.85rem] text-[rgba(242,232,213,0.55)] font-body">{p.desc}</div>
                </div>
                <div className="text-right relative z-10">
                  <div className="font-display italic text-[1.8rem]" style={{ color: s.color }}>{p.amount}</div>
                  <div className="text-[0.8rem] font-bold opacity-80 font-body" style={{ color: s.color }}>{p.coin}</div>
                </div>
              </div>
            );
          })}
          <div className="bg-pizza-surface border border-pizza-border rounded-xl px-6 py-4 mt-4">
            <p className="text-[0.85rem] text-[rgba(242,232,213,0.65)] leading-relaxed font-body">
              🤝 <strong className="text-pizza-cream">Colaboración especial:</strong> Los ganadores serán invitados a los eventos IRL de Música Web3 y tendrán su canción incluida en el catálogo oficial de PizzaDAO.
            </p>
          </div>
        </div>

        {/* Rules + Form */}
        <div>
          {/* Deadline */}
          <div className="flex items-center justify-between rounded-xl px-6 py-4 mb-6 border border-pizza-border bg-pizza-surface">
            <div>
              <div className="text-[0.85rem] text-[rgba(242,232,213,0.55)] font-body">🗓️ Fecha límite de postulación</div>
              <div className="font-display italic text-[1.3rem] text-pizza-gold">31 de Agosto, 2025</div>
            </div>
            <div className="text-right">
              <div className="text-[0.85rem] text-[rgba(242,232,213,0.55)] font-body">Estado</div>
              <div className="text-pizza-green font-extrabold text-[0.9rem]">✅ Abierto</div>
            </div>
          </div>

          {/* Rules */}
          <div className="bg-pizza-surface border border-pizza-border rounded-xl p-6 mb-6">
            <div className="font-display italic text-[1.1rem] text-pizza-gold mb-4 flex items-center gap-2 tracking-wide">
              📋 Bases del Concurso
            </div>
            <ul className="list-none space-y-0">
              {rules.map((rule, i) => (
                <li key={i} className="py-2 border-b border-[rgba(242,232,213,0.06)] last:border-b-0 text-[0.88rem] text-[rgba(242,232,213,0.75)] flex items-start gap-2 font-body">
                  <span className="text-[0.7rem] mt-0.5 flex-shrink-0 opacity-60">🍕</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Submit Form */}
          <div className="bg-pizza-surface border border-[rgba(201,162,39,0.2)] rounded-xl p-8 text-center">
            <div className="font-display italic text-[1.4rem] text-pizza-gold mb-1">🎤 Postula tu Canción</div>
            <div className="text-[0.9rem] text-[rgba(242,232,213,0.5)] mb-6 font-body">Completa el formulario y únete al concurso</div>

            <form onSubmit={handleSubmit} className="text-left space-y-4">
              {[
                { label: 'Nombre del Artista', key: 'artist', placeholder: 'Tu nombre artístico...', type: 'text' },
                { label: 'Nombre de la Canción', key: 'song', placeholder: 'Título de tu track...', type: 'text' },
                { label: 'Link a la canción', key: 'link', placeholder: 'SoundCloud / Spotify / YouTube...', type: 'url' },
                { label: 'Tu wallet (para recibir premios)', key: 'wallet', placeholder: '0x...', type: 'text' },
              ].map(({ label, key, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[rgba(242,232,213,0.5)] mb-1.5 font-body">
                    {label}
                  </label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-[#120A04] border border-pizza-border rounded-lg px-4 py-2.5 text-pizza-cream font-body text-[0.9rem] focus:outline-none focus:border-pizza-gold transition-colors placeholder-[rgba(242,232,213,0.25)]"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[rgba(242,232,213,0.5)] mb-1.5 font-body">
                  País
                </label>
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-[#120A04] border border-pizza-border rounded-lg px-4 py-2.5 text-pizza-cream font-body text-[0.9rem] focus:outline-none focus:border-pizza-gold transition-colors cursor-pointer"
                >
                  <option value="" disabled className="bg-[#111111]">Selecciona tu país...</option>
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-[#111111]">{c}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-pizza-red text-pizza-cream py-3.5 rounded-full font-accent text-lg border-none cursor-pointer transition-all hover:-translate-y-1 hover:bg-[#B01215] hover:shadow-[0_8px_30px_rgba(212,23,26,0.35)] shadow-[0_4px_20px_rgba(212,23,26,0.2)] mt-2"
              >
                🍕 Postular mi Canción
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

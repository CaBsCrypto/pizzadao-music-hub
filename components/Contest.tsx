'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/i18n/translations';

const prizeStyles: Record<string, { border: string; color: string; shadow: string; glow: string }> = {
  gold:   { border: '#C9A227', color: '#A07800', shadow: '0 0 24px rgba(201,162,39,0.12)', glow: 'rgba(201,162,39,0.04)' },
  silver: { border: '#9A9A9A', color: '#6A6A6A', shadow: '0 0 16px rgba(180,180,180,0.06)', glow: 'rgba(180,180,180,0.02)' },
  bronze: { border: '#A0632A', color: '#804010', shadow: '0 0 16px rgba(160,99,42,0.08)',   glow: 'rgba(160,99,42,0.02)' },
};

const countries = ['Argentina', 'Chile', 'Colombia', 'México', 'Perú', 'Venezuela', 'España', 'Otro'];

export default function Contest() {
  const [form, setForm] = useState({ artist: '', song: '', link: '', wallet: '', country: '' });
  const [modalOpen, setModalOpen] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang].contest;

  useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener('openPostulationModal', handler);
    return () => window.removeEventListener('openPostulationModal', handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(T.modal.successMsg);
    setForm({ artist: '', song: '', link: '', wallet: '', country: '' });
    setModalOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes vinylSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes vinylCounterSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        .vinyl-disc { animation: vinylSpin 7s linear infinite; }
        .vinyl-disc:hover { animation: vinylSpin 2.5s linear infinite; }
        .vinyl-label { animation: vinylCounterSpin 7s linear infinite; }
        .vinyl-disc:hover .vinyl-label { animation: vinylCounterSpin 2.5s linear infinite; }
      `}</style>

      {/* ── Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl overflow-y-auto"
            style={{
              background: '#F0F8FF',
              border: '1px solid rgba(209,213,219,0.8)',
              boxShadow: '0 0 60px rgba(0,0,0,0.15), 0 40px 80px rgba(0,0,0,0.2)',
              maxHeight: '90vh',
            }}
          >
            <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-pizza-border">
              <div>
                <div className="font-display italic text-[1.5rem] text-pizza-red leading-tight">{T.modal.title}</div>
                <div className="text-[0.8rem] text-pizza-muted font-body mt-0.5">{T.modal.subtitle}</div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-8 h-8 rounded-full border border-pizza-border text-pizza-body flex items-center justify-center text-sm hover:border-pizza-red hover:text-pizza-red bg-transparent cursor-pointer transition-all"
              >✕</button>
            </div>
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
              {T.modal.fields.map(({ label, key, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-pizza-body mb-1.5 font-body">{label}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-pizza-raised border border-pizza-border rounded-lg px-4 py-2.5 text-pizza-dark font-body text-[0.9rem] focus:outline-none focus:border-pizza-red transition-colors placeholder-pizza-muted"
                  />
                </div>
              ))}
              <div>
                <label className="block text-[0.72rem] font-bold uppercase tracking-[0.12em] text-pizza-body mb-1.5 font-body">{T.modal.countryLabel}</label>
                <select
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full bg-pizza-raised border border-pizza-border rounded-lg px-4 py-2.5 text-pizza-dark font-body text-[0.9rem] focus:outline-none focus:border-pizza-red transition-colors cursor-pointer"
                >
                  <option value="" disabled className="bg-white">{T.modal.countryPlaceholder}</option>
                  {countries.map((c) => <option key={c} value={c} className="bg-white">{c}</option>)}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-pizza-red text-white py-3.5 rounded-full font-accent text-lg border-none cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(220,38,38,0.4)] shadow-[0_4px_20px_rgba(220,38,38,0.25)] mt-2"
              >{T.modal.submitBtn}</button>
            </form>
          </div>
        </div>
      )}

      {/* ── Section ── */}
      <section id="concurso" className="py-20 px-6 relative overflow-hidden bg-pizza-sky-mid">

        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.4) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute text-[28rem] opacity-[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">🍕</div>

        {/* ── ZONA 1: Header ── */}
        <div className="text-center mb-14 relative z-10">
          <div className="inline-block bg-transparent border border-pizza-red text-pizza-red text-xs font-body font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-[20px] mb-4">
            {T.badge}
          </div>
          <h2
            className="font-display italic text-pizza-dark mb-3"
            style={{ fontSize: 'clamp(2rem,5vw,3.5rem)' }}
          >
            {T.title}
          </h2>
          <p className="max-w-[560px] mx-auto leading-[1.8] font-body text-[0.9rem] text-pizza-muted">
            {T.description}
          </p>
        </div>

        {/* ── ZONA 2: Vinyl | Premios ── */}
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-8 items-center mb-10 relative z-10">

          {/* Col izquierda — Vinyl CTA */}
          <div
            className="flex flex-col items-center justify-center gap-6 rounded-2xl py-10"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(220,38,38,0.18) 0%, rgba(220,38,38,0.05) 50%, transparent 70%)',
              border: '1px solid rgba(209,213,219,0.6)',
            }}
          >
            {/* Vinyl */}
            <div
              className="vinyl-disc relative cursor-pointer"
              style={{ width: '280px', height: '280px' }}
              onClick={() => setModalOpen(true)}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle at 32% 28%, #EF4444 0%, #B91C1C 45%, #7F1D1D 100%)',
                  boxShadow: '0 0 0 2px rgba(220,38,38,0.6), 0 0 80px rgba(220,38,38,0.35), 0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                {/* Groove rings */}
                {[22, 34, 46, 57, 67, 76, 84, 91].map((pct, i) => (
                  <div key={pct} className="absolute rounded-full" style={{
                    top: `${pct / 2}%`, left: `${pct / 2}%`,
                    width: `${100 - pct}%`, height: `${100 - pct}%`,
                    border: `1px solid ${i % 2 === 0 ? 'rgba(255,255,255,0.18)' : 'rgba(255,200,200,0.12)'}`,
                  }} />
                ))}
                {/* Highlight arc — simula reflejo de luz */}
                <div className="absolute inset-0 rounded-full pointer-events-none" style={{
                  background: 'radial-gradient(ellipse at 32% 22%, rgba(255,255,255,0.22) 0%, transparent 55%)',
                }} />
              </div>
              {/* Center label — dorado para contrastar con el disco rojo */}
              <div
                className="vinyl-label absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center"
                style={{
                  width: '104px', height: '104px',
                  background: 'linear-gradient(135deg, #F59E0B 0%, #B45309 100%)',
                  boxShadow: '0 0 28px rgba(245,158,11,0.6)',
                }}
              >
                <span className="text-2xl mb-0.5">🎤</span>
                <span className="text-[0.6rem] font-black text-white uppercase tracking-[0.15em] leading-none">{T.vinyl}</span>
                <div className="absolute w-3 h-3 rounded-full bg-[#1C0800]" />
              </div>
            </div>

            <p className="text-[0.7rem] font-body tracking-wide text-pizza-muted">
              {T.deadlineLabel} &nbsp;·&nbsp; {T.open}
            </p>
          </div>

          {/* Col derecha — Premios */}
          <div>
            <h3 className="font-display italic text-[1.5rem] text-pizza-dark mb-5 tracking-wide">{T.prizesTitle}</h3>
            {T.prizes.map((p) => {
              const s = prizeStyles[p.style];
              return (
                <div
                  key={p.place}
                  className="rounded-xl py-4 px-5 mb-3 flex items-center gap-4 border transition-all duration-300 relative overflow-hidden hover:-translate-y-0.5"
                  style={{ background: '#FFFFFF', borderColor: s.border, boxShadow: s.shadow }}
                >
                  <div className="absolute inset-0 opacity-[0.04]" style={{
                    background: `radial-gradient(ellipse at left, ${s.glow} 0%, transparent 60%)`,
                  }} />
                  <span className="text-4xl relative z-10 flex-shrink-0">{p.medal}</span>
                  <div className="flex-1 relative z-10 min-w-0">
                    <div className="font-display italic text-[1rem] mb-0.5" style={{ color: s.color }}>{p.place}</div>
                    <div className="text-[0.78rem] text-pizza-body font-body truncate">{p.desc}</div>
                  </div>
                  <div className="text-right relative z-10 flex-shrink-0">
                    <div className="font-display italic text-[1.6rem] leading-none" style={{ color: s.color }}>{p.amount}</div>
                    <div className="text-[0.72rem] font-bold opacity-70 font-body" style={{ color: s.color }}>{p.coin}</div>
                  </div>
                </div>
              );
            })}
            {/* Collab note */}
            <div className="mt-4 px-1">
              <p className="text-[0.8rem] leading-relaxed font-body text-pizza-muted">
                🤝 <span className="text-pizza-body">{T.collab}</span> {T.collabDesc}
              </p>
            </div>
          </div>
        </div>

        {/* ── ZONA 3: Bases full width ── */}
        <div
          className="max-w-[1100px] mx-auto rounded-2xl overflow-hidden relative z-10"
          style={{
            border: '1px solid rgba(209,213,219,0.8)',
            background: '#FFFFFF',
            boxShadow: '0 4px 40px rgba(0,0,0,0.08)',
          }}
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-pizza-border">
            <span className="font-display italic text-pizza-red text-[1.05rem] tracking-wide">{T.rulesTitle}</span>
            <span className="text-[0.65rem] text-pizza-muted font-body uppercase tracking-[0.15em]">{T.rules.length} {lang === 'es' ? 'condiciones' : 'conditions'}</span>
          </div>
          {/* Rules 2-col grid */}
          <div className="grid md:grid-cols-2 gap-0 px-6 py-4">
            {T.rules.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 py-2.5 font-body text-[0.83rem] text-pizza-body"
                style={{ borderBottom: i < T.rules.length - 2 ? '1px solid rgba(209,213,219,0.4)' : 'none' }}
              >
                <span className="text-pizza-red opacity-60 text-[0.65rem] mt-0.5 flex-shrink-0">🍕</span>
                {rule}
              </div>
            ))}
          </div>
          {/* Footer row */}
          <div className="flex items-center justify-between px-6 py-2.5 border-t border-pizza-border">
            <span className="text-[0.6rem] text-pizza-muted font-body uppercase tracking-[0.15em]">
              PizzaDAO Music Contest · 2026
            </span>
            <span
              className="text-[0.65rem] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-md"
              style={{ background: 'rgba(220,38,38,0.08)', color: '#DC2626', border: '1px solid rgba(220,38,38,0.25)' }}
            >
              CC0
            </span>
          </div>
        </div>

      </section>
    </>
  );
}

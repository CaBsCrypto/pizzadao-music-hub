import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SongsGrid from '@/components/SongsGrid';
import Contest from '@/components/Contest';
import VotingPanel from '@/components/VotingPanel';
import Events from '@/components/Events';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';

function PartnerBanner() {
  return (
    <div
      id="partners"
      className="border-t border-b border-[rgba(201,162,39,0.15)] py-8 px-8 text-center bg-[#100C06]"
    >
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[rgba(242,232,213,0.3)] mb-6 font-body">
        En colaboración con
      </p>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        <div className="font-accent text-[1.1rem] text-[rgba(242,232,213,0.45)] flex items-center gap-2.5 hover:text-pizza-gold transition-colors tracking-wide">
          🍕 PizzaDAO
        </div>
        <div className="text-[0.65rem] text-pizza-gold opacity-30 px-4 tracking-widest">×</div>
        <div className="font-accent text-[1.1rem] text-[rgba(242,232,213,0.45)] flex items-center gap-2.5 hover:text-pizza-gold transition-colors tracking-wide">
          🎵 Música Web3
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PartnerBanner />
      <SongsGrid />
      <Contest />
      <VotingPanel />
      <Events />
      <GameSection />
      <Footer />
    </main>
  );
}

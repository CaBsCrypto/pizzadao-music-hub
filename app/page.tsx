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
      className="border-t border-b border-[rgba(200,130,0,0.2)] py-8 px-8 text-center bg-pizza-raised"
    >
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-pizza-muted mb-6 font-body">
        En colaboración con
      </p>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        <div className="font-accent text-[1.1rem] text-pizza-body flex items-center gap-2.5 hover:text-pizza-orange transition-colors tracking-wide">
          🍕 PizzaDAO
        </div>
        <div className="text-[0.65rem] text-pizza-gold opacity-50 px-4 tracking-widest">×</div>
        <div className="font-accent text-[1.1rem] text-pizza-body flex items-center gap-2.5 hover:text-pizza-orange transition-colors tracking-wide">
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

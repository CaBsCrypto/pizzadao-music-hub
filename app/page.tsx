import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerBanner from '@/components/PartnerBanner';
import SongsGrid from '@/components/SongsGrid';
import Contest from '@/components/Contest';
import VotingPanel from '@/components/VotingPanel';
import Events from '@/components/Events';
import GameSection from '@/components/GameSection';
import Footer from '@/components/Footer';

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

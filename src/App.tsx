import Hero from './components/Hero.tsx';
import VideoSection from './components/VideoSection';
import Founders from './components/Founders';
import Benefits from './components/Benefits';
import NetworkMembers from './components/NetworkMembers';
import Trips from './components/Trips';
import HowToApply from './components/HowToApply';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <VideoSection />
      <Founders />
      <Benefits />
      <NetworkMembers />
      <Trips />
      <HowToApply />
      <Footer />
    </div>
  );
}

export default App;

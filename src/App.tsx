import Banner from './components/Banner';
import TrackSection from './components/landing/TrackSection';
import HeroSection from './components/landing/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-neutrals-white">
      <Navbar />
      <HeroSection />
      <Banner />
      <TrackSection />
    </div>
  );
}

export default App;

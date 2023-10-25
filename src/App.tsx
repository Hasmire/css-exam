import Banner from './components/Banner';
import TrackSection from './components/landing/TrackSection';
import HeroSection from './components/landing/HeroSection';
import Navbar from './components/Navbar';
import SubjectSection from './components/landing/SubjectSection';
import LatestPostSection from './components/landing/LatestPostSection';

function App() {
  return (
    <div className="overflow-hidden bg-neutrals-white">
      <Navbar />
      <HeroSection />
      <Banner />
      <TrackSection />
      <Banner />
      <SubjectSection />
      <Banner />
      <LatestPostSection />
      <Banner />
    </div>
  );
}

export default App;

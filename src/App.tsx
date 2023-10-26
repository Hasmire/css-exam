import TrackSection from './components/landing/TrackSection';
import HeroSection from './components/landing/HeroSection';
import Navbar from './components/Navbar';
import SubjectSection from './components/landing/SubjectSection';
import LatestPostSection from './components/landing/LatestPostSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-hidden bg-neutrals-white">
      <Navbar />
      <HeroSection />
      <TrackSection />
      <SubjectSection />
      <LatestPostSection />
      <Footer />
    </div>
  );
}

export default App;

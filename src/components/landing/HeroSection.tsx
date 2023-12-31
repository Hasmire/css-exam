import Button from '../Button';
import LandingLayout from '../layout/LandingLayout';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <LandingLayout padding="py-28">
      <div className="w-3/4 text-center text-2xl font-extrabold text-primary md:w-1/2 md:text-4xl">
        Meet the UST - Computer Science Society
      </div>
      <div className="mt-3.5 text-center text-lg font-medium">#SayYesToCSS</div>
      <div className="mt-12 flex gap-2.5">
        <Link to="tracks" smooth={true} duration={500}>
          <Button>#tracks</Button>
        </Link>
        <Link to="subjects" smooth={true} duration={500}>
          <Button>#subjects</Button>
        </Link>
        <Link to="latestPage" smooth={true} duration={500}>
          <Button>#latestpage</Button>
        </Link>
      </div>
    </LandingLayout>
  );
};

export default HeroSection;

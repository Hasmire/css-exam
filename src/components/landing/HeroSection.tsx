import Button from '../Button';
import LandingLayout from '../layout/LandingLayout';

const HeroSection = () => {
  return (
    <LandingLayout padding="py-28">
      <div className="w-3/4 text-center text-2xl font-extrabold text-primary md:w-1/2 md:text-4xl">
        This is the UST - Computer Science Society
      </div>
      <div className="mt-3.5 text-center text-lg font-medium">#SayYesToCSS</div>
      <div className="mt-12 flex gap-2.5">
        <Button>#tracks</Button>
        <Button>#subjects</Button>
        <Button>#latestpage</Button>
      </div>
    </LandingLayout>
  );
};

export default HeroSection;

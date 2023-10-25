import Button from '../Button';

const HeroSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-28">
      <div className="w-[713px] text-4xl font-extrabold text-primary">
        Lorem ipsum dolor sit amet, consectetur adi
      </div>
      <div className="mt-3.5 text-lg font-medium">
        incididunt ut labore et dolore magna aliqua
      </div>
      <div className="mt-12 flex gap-2.5">
        <Button>#tracks</Button>
        <Button>#subjects</Button>
        <Button>#latestpage</Button>
      </div>
    </div>
  );
};

export default HeroSection;

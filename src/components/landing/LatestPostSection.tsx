import LandingLayout from '../layout/LandingLayout';

const LatestPostSection = () => {
  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Latest Post</div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-9"></div>
    </LandingLayout>
  );
};

export default LatestPostSection;

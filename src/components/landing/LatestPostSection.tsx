import { useEffect, useState } from 'react';
import { postData } from '../../constants/postData';
import Carousel from '../Carousel';
import LandingLayout from '../layout/LandingLayout';

const LatestPostSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % postData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handlePeriodClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Latest Post</div>
      <Carousel
        posts={postData}
        activeIndex={activeIndex}
        onPeriodClick={handlePeriodClick}
      />
    </LandingLayout>
  );
};

export default LatestPostSection;

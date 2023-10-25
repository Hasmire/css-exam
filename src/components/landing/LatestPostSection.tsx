import { postData } from '../../constants/postData';
import Carousel from '../Carousel';
import LandingLayout from '../layout/LandingLayout';

const LatestPostSection = () => {
  return (
    <LandingLayout hideBanner>
      <div className="text-3xl font-extrabold text-primary">Latest Post</div>
      <Carousel posts={postData} />
    </LandingLayout>
  );
};

export default LatestPostSection;

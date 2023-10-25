import { postData } from '../../constants/postData';
import Post from '../Post';
import LandingLayout from '../layout/LandingLayout';

const LatestPostSection = () => {
  return (
    <LandingLayout>
      <div className="text-3xl font-extrabold text-primary">Latest Post</div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-9">
        {postData.map((post, index) => (
          <div key={index}>
            <Post src={post.src} title={post.title} date={post.date} />
          </div>
        ))}
      </div>
    </LandingLayout>
  );
};

export default LatestPostSection;

import { useEffect, useState } from 'react';
import Post from './Post';

type PostType = {
  src: string;
  title: string;
  date: string;
};

type Props = {
  posts: PostType[];
};

const Carousel = (props: Props) => {
  const { posts } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (posts.length / 4));
    }, 10000);

    return () => clearInterval(interval);
  }, [activeIndex, posts.length, setActiveIndex]);

  const handlePeriodClick = (index: number) => {
    setActiveIndex(index);
  };

  const groupedPosts = [];
  for (let i = 0; i < posts.length; i += 4) {
    groupedPosts.push(posts.slice(i, i + 4));
  }

  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-9">
        {groupedPosts[activeIndex].map((post, index) => (
          <div key={index}>
            <Post src={post.src} title={post.title} date={post.date} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        {groupedPosts.map((_group, index) => (
          <div
            key={index}
            className={`mx-2 h-4 w-4 cursor-pointer rounded-full ${
              index === activeIndex ? 'bg-primary' : 'bg-neutrals-gray'
            }`}
            onClick={() => handlePeriodClick(index)}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Carousel;

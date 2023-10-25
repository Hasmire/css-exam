import Post from './Post';

type PostType = {
  src: string;
  title: string;
  date: string;
};

type Props = {
  posts: PostType[];
  activeIndex: number;
  onPeriodClick: (index: number) => void;
};

const Carousel = (props: Props) => {
  const { posts, activeIndex, onPeriodClick } = props;

  const startIndex = activeIndex - 1 < 0 ? posts.length - 1 : activeIndex - 1;
  const endIndex = (activeIndex + 2) % posts.length;

  return (
    <div>
      <div className="mt-8 flex items-center justify-center gap-9">
        {posts.map((post, index) => (
          <div
            key={index}
            style={{
              display:
                index === activeIndex ||
                index === startIndex ||
                index === endIndex
                  ? 'block'
                  : 'none',
            }}
          >
            <Post src={post.src} title={post.title} date={post.date} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {posts.map((_, index) => (
          <div
            key={index}
            className={`mx-2 h-4 w-4 cursor-pointer rounded-full ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
            onClick={() => onPeriodClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

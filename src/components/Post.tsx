type Props = {
  src: string;
};

const Post = (props: Props) => {
  const { src } = props;

  console.log(src);
  return (
    <div
      className="relative flex h-[315px] w-[315px] cursor-pointer flex-col justify-end bg-neutrals-lightGray bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 52.6%, #000 100%), url(${src})`,
      }}
    >
      <div className="z-10 px-[17px] py-[19px] text-neutrals-white">
        <div className="text-lg font-medium">New Years Day</div>
        <div className="text-sm">1 day ago</div>
      </div>
    </div>
  );
};

export default Post;

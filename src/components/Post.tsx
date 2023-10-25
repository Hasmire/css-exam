type Props = {
  src: string;
  title: string;
  date: string;
};

const Post = (props: Props) => {
  const { src, title, date } = props;

  return (
    <div
      className="relative flex h-[315px] w-[315px] transform-gpu cursor-pointer flex-col justify-end bg-neutrals-lightGray bg-cover bg-center transition duration-300 hover:scale-110"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 52.6%, #000 100%), url(${src})`,
      }}
    >
      <div className="z-10 px-[17px] py-[19px] text-neutrals-white">
        <div className="text-lg font-medium">{title}</div>
        <div className="text-sm">{date}</div>
      </div>
    </div>
  );
};

export default Post;

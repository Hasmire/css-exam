import Button from './Button';

type Props = {
  src: string;
  alt?: string;
  title: string;
  body: string;
};

const Track = (props: Props) => {
  const { src, alt, title, body } = props;

  return (
    <div className="flex w-[372px] flex-col items-center gap-4">
      <img src={src} alt={alt} className="h-[220px] rounded-[35px]" />
      <div className="text-xl font-bold text-neutrals-base">{title}</div>
      <div className="line-clamp-5 h-[120px] w-[343px] text-center">{body}</div>
      <Button>Learn More</Button>
    </div>
  );
};

export default Track;

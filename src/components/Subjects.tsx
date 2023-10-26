import Button from './Button';

type Props = {
  src: string;
  alt?: string;
  code: string;
  title: string;
};

const Subjects = (props: Props) => {
  const { src, alt, code, title } = props;

  return (
    <div className="flex w-80 flex-col rounded-[20px] bg-neutrals-lightGray md:w-[413px]">
      <img
        src={src}
        alt={alt}
        className="h-60 rounded-[20px] object-cover md:h-[313px]"
      />
      <div className="flex flex-col p-5">
        <div className="text-xl font-bold text-primary">{code}</div>
        <div className="text-lg font-medium text-neutrals-base">{title}</div>
        <Button className="mt-2 w-fit self-end">Learn More</Button>
      </div>
    </div>
  );
};

export default Subjects;

import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = (props: Props) => {
  const { children, className, onClick } = props;

  const buttonClassName = twMerge(
    'bg-accent-purple text-neutrals-white hover:shadow-button active:bg-accent-orange rounded-[10px] px-5 py-2.5 text-sm font-bold',
    className,
  );

  return (
    <button type="button" onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
};

export default Button;

import Image from '/Logo.png';

type Props = {
  className?: string;
};

const Logo = (props: Props) => {
  const { className } = props;

  return <img src={Image} alt="CSS Logo" className={className} />;
};

export default Logo;

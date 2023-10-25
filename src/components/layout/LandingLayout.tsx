type Props = {
  children: React.ReactNode;
  padding?: string;
};

const LandingLayout = (props: Props) => {
  const { children, padding = 'py-20' } = props;

  const className =
    'flex w-full flex-col items-center justify-center ' + padding;

  return <div className={className}>{children}</div>;
};

export default LandingLayout;

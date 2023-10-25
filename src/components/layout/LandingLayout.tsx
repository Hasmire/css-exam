import Banner from '../Banner';

type Props = {
  children: React.ReactNode;
  padding?: string;
  hideBanner?: boolean;
};

const LandingLayout = (props: Props) => {
  const { children, padding = 'py-20', hideBanner = false } = props;

  const className =
    'flex w-full flex-col items-center justify-center ' + padding;

  return (
    <>
      <div className={className}>{children}</div>
      {!hideBanner && <Banner />}
    </>
  );
};

export default LandingLayout;

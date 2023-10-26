import Banner from '../Banner';

type Props = {
  children: React.ReactNode;
  id?: string;
  padding?: string;
  hideBanner?: boolean;
};

const LandingLayout = (props: Props) => {
  const { children, id, padding = 'py-20', hideBanner = false } = props;

  const className =
    'flex w-full flex-col items-center justify-center ' + padding;

  return (
    <>
      <div className={className} id={id}>
        {children}
      </div>
      {!hideBanner && <Banner />}
    </>
  );
};

export default LandingLayout;

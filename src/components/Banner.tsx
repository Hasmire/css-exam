import Image from '/newLogo.png';

const Banner = () => {
  return (
    <div className="my-[21px] flex h-[120px] w-screen items-center justify-center bg-neutrals-light">
      <div
        className="h-[75px] w-full bg-repeat-x"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: '75px',
        }}
      ></div>
    </div>
  );
};

export default Banner;

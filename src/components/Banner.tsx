import Image from '/newLogoResized.png';

const Banner = () => {
  return (
    <div className="my-[21px] flex h-[120px] w-screen items-center justify-center bg-neutrals-light">
      <div
        className="h-[75px] w-full bg-repeat-x"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: '150px',
          backgroundPosition: '70px 0',
        }}
      ></div>
    </div>
  );
};

export default Banner;

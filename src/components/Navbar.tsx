import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between border px-16 py-6">
      <Logo />
      <div className="flex gap-10 text-base font-bold text-primary">
        <div className="cursor-pointer hover:underline ">Home</div>
        <div className="cursor-pointer hover:underline ">About</div>
        <div className="cursor-pointer hover:underline ">Community</div>
        <div className="cursor-pointer hover:underline ">News & Events</div>
      </div>
    </div>
  );
};

export default Navbar;

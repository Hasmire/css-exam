import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between border px-16 py-6">
      <Logo />
      <div className="flex gap-10 text-base font-bold text-primary">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Community</div>
        <div className="cursor-pointer">News & Events</div>
      </div>
    </div>
  );
};

export default Navbar;

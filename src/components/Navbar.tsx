import { navLinks } from '../constants/navLinks';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-center border px-16 py-6 md:justify-between">
      <Logo />
      <div className="hidden gap-10 text-base font-bold text-primary md:flex">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="cursor-pointer hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

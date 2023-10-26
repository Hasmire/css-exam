import { navLinks } from '../constants/navLinks';
import Logo from './Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 bg-primary px-14 py-16 text-neutrals-light md:flex-row md:justify-between md:gap-0 md:px-32">
      <div className="flex flex-col gap-2">
        <div className="w-fit rounded-xl bg-neutrals-white p-2">
          <Logo />
        </div>
        <div className="text-sm ">#SayYesToCSS</div>
        <div className="rounded-lg bg-neutrals-white px-4 py-2 text-sm text-primary">
          Passionately designed & developed by CSS 💻
        </div>
      </div>
      <div className="flex flex-col gap-12 md:flex-row md:gap-16">
        <div className="flex flex-col gap-2">
          <div className="text-base font-bold">
            UST Computer Science Society
          </div>
          {navLinks.slice(1).map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faEnvelope} />
            <div>Email</div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faFacebook} />
            <div>Facebook</div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faTwitter} />
            <div>Twitter</div>
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faInstagram} />
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

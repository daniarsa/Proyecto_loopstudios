import '../styles/Footer.scss';
import '../styles/Footer.scss';
import Logo from "./Logo"; 

// Importación de los íconos SVG
import FacebookIcon from '../assets/img/icons/icon-facebook.svg';
import TwitterIcon from '../assets/img/icons/icon-twitter.svg';
import PinterestIcon from '../assets/img/icons/icon-pinterest.svg';
import InstagramIcon from '../assets/img/icons/icon-instagram.svg';

const Footer = () => {
  const links = ['About', 'Careers', 'Events', 'Products', 'Support'];
  const socialIcons = [
    { id: 'facebook', icon: FacebookIcon, alt: 'Facebook', url: 'https://www.facebook.com' },
    { id: 'twitter', icon: TwitterIcon, alt: 'Twitter', url: 'https://www.twitter.com' },
    { id: 'pinterest', icon: PinterestIcon, alt: 'Pinterest', url: 'https://www.pinterest.com' },
    { id: 'instagram', icon: InstagramIcon, alt: 'Instagram', url: 'https://www.instagram.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
        <Logo />
          <ul className="footer__links">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__right">
          <div className="footer__social">
            {socialIcons.map((icon) => (
              <a key={icon.id} href={icon.url}>
                <img src={icon.icon} alt={icon.alt} className="footer__icon" />
              </a>
            ))}
          </div>
          <p className="footer__copyright">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
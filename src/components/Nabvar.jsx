import React, { useState } from 'react';
import Logo from "./Logo";
import NavLink from "./NavLink";
import "../styles/Nabvar.scss"; 



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: "#about", text: "About" },
    { href: "#careers", text: "Careers" },
    { href: "#events", text: "Events" },
    { href: "#products", text: "Products" },
    { href: "#support", text: "Support" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      {!isMenuOpen && <Logo />}
      <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
      {isMenuOpen && <Logo />}

        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink href={link.href} text={link.text} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className={`navbar__toggle-bar ${isMenuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
        <span className={`navbar__toggle-bar ${isMenuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
        <span className={`navbar__toggle-bar ${isMenuOpen ? 'navbar__toggle-bar--open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Navbar;
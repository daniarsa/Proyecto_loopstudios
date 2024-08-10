import React, { useState } from 'react';
import Logo from "./Logo"; // Ruta relativa corregida
import NavLink from "./NavLink";
import "../styles/Nabvar.scss"; // Ruta relativa para el archivo SCSS



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <Logo />
      <nav className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#support">Support</a></li>
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


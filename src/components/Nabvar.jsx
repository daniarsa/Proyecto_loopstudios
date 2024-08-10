import React from "react";
import Logo from "./Logo"; // Ruta relativa corregida
import NavLink from "./NavLink";
import "../styles/Nabvar.scss"; // Ruta relativa para el archivo SCSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        <NavLink href="#about" text="About" />
        <NavLink href="#careers" text="Careers" />
        <NavLink href="#events" text="Events" />
        <NavLink href="#products" text="Products" />
        <NavLink href="#support" text="Support" />
      </div>
    </nav>
  );
};

export default Navbar;
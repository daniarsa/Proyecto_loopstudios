import React from 'react';
import "../styles/NavLink.scss";

const NavLink = ({ href, text }) => {
  return (
    <a href={href} className="nav-link">
      {text}
    </a>
  );
};

export default NavLink;
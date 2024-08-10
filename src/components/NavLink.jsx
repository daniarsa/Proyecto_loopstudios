import React from 'react';
import PropTypes from 'prop-types';
import "../styles/NavLink.scss";

const NavLink = ({ href, text }) => {
  return (
    <a href={href} className="nav-link">
      {text}
    </a>
  );
};

// Definir PropTypes para NavLink
NavLink.propTypes = {
  href: PropTypes.string.isRequired, // 'href' es un string y es obligatorio
  text: PropTypes.string.isRequired, // 'text' es un string y es obligatorio
};

export default NavLink;
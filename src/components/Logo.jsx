import React from 'react';
import "../styles/logo.scss";
import logo from "../assets/img/icons/logo.svg"; // Adjust the path as necessary

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Loopstudios Logo" />
    </div>
  );
};

export default Logo;

import React from 'react';
import "../styles/Logo.scss";
import logo from "../assets/img/icons/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Loopstudios Logo" />
    </div>
  );
};

export default Logo;

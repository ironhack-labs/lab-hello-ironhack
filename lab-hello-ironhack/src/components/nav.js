import React from 'react';
import logo from '../images/ironhack-logo.svg';
import menu from '../images/menu-top.svg'
import "./Nav.css"

const nav = () => {
  return (
      <div className="nav">
        <img src={logo} className="ironhack-logo" alt="logo" />
        <img src={menu} className="menu-top" alt="menu" />
      </div>
  );
}

export default nav;


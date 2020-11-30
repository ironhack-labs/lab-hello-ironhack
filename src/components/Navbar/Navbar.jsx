import React from "react";
const logo = "images/ironhack-logo.svg";
const menu = "images/menu-top.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} />
      <img src={menu} />
    </div>
  );
}

export default Navbar;

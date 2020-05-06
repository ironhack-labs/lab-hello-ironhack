import React from "react";
import "./navbar.styles.css";

const Navbar = ({ logo, menu }) => {
  return (
    <nav className="navbar">
      <img src={logo} />
      <img src={menu} />
    </nav>
  );
};

export default Navbar;

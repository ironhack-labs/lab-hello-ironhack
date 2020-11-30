import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <img
          src="/images/ironhack-logo.svg"
          className="ironhack-logo"
          alt="Ironhack Logo"
        />

        <a href="#">
          <img className="menu" src="/images/menu-top.svg"></img>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;

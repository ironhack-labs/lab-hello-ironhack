import React from "react";
import "./css/HeaderMain.css";
import "./css/index.css";

export default function HeaderMain() {
  return (
    <header id="header-main">
      <nav className="nav-bar">
        <img
          className="img-left"
          src="./images/ironhack-logo.svg"
          alt="logo ironhack"
        />
        <img className="img-right" src="./images/menu-top.svg" alt="menu top" />
      </nav>
    </header>
  );
}

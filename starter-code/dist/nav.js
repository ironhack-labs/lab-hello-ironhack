import React from "react";
import logo from "../public/images/ironhack-logo.svg";
import menu from "../public/images/menu-top.svg";
import "./navCSS.css";

export const Nav = () => {
  return (
    <nav>
      <ul className="nav-inner">
        <li>
          <img src={logo} alt="IronHack" title="IronHack" />
        </li>
        <li>
          <img src={menu} alt="Nav" title="Nav" />
        </li>
      </ul>
    </nav>
  );
};

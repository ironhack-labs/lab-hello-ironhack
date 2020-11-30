import React from "react";
const logo = "/images/power.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="navigation">
        <img src={logo} className="nav-logo" alt=""></img>
        <ul className="nav-menu">
          <li>
            <a href="#" className="pink">
              Blossom
            </a>
          </li>
          <li>
            <a href="#" className="blue">
              Bubbles
            </a>
          </li>
          <li>
            <a href="#" className="green">
              Buttercup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

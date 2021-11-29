import React from "react";
import ironhack_logo from "./ironhack-logo.svg";
import "./Nav.css";
const Nav = (props) => {
  return (
    <div className="navBox">
      <img src={ironhack_logo} alt="" />
      <img src={props.src} alt="" />
    </div>
  );
};

export default Nav;

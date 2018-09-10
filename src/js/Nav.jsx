import ReactDOM from "react-dom";
import React from "react";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: " 40px 60px"
};

const menu = {
  width: "30px"
};

const Nav = () => {
  return (
    <div>
      <nav style={navStyle}>
        <img src={require("../../public/ironhack-logo.svg")} alt="" />
        <img style={menu} src={require("../../public/menu-top.svg")} alt="" />
      </nav>
    </div>
  );
};

export default Nav;

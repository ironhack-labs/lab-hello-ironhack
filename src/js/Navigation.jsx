import React, { Component } from "react";
import logo from "../../public/ironhack-logo.svg";
import menuImg from "../../public/menu-top.svg";

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <img src={logo} alt="" />
        <img src={menuImg} alt="" />
      </div>
    );
  }
}

export default Navigation;

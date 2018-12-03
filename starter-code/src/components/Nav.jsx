import React, { Component } from "react";
import "./style/nav.css";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="nav">
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
      </nav>
    );
  }
}

export default Nav;

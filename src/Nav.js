import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <img src="/images/ironhack-logo.svg" alt="logo" />
          <img src="/images/menu-top.svg" alt="menu" />
        </nav>
      </div>
    );
  }
}

export default Nav;

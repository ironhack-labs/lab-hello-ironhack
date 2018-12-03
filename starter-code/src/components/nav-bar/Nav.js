import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
        <img src="../../images/ironhack-logo.svg" />;
        <img src="../../images/menu-top.svg" />;
        </nav>
      </div>
    );
  }
}

export default Nav;
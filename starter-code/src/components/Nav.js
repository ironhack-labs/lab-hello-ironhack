import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" />
      </div>
    );
  }
}

export default Nav;
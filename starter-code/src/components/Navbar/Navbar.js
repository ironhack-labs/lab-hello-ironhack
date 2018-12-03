import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="Navbar">
        <img className="logo" src="/images/ironhack-logo.svg"></img>
        <img className="menu" src="/images/menu-top.svg"></img>
      </nav>
    );
  }
}

export default Navbar;
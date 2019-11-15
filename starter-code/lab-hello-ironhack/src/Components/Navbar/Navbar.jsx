import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    console.log(`render is running for Navbar class`);

    return (
      <nav className="navbar">
        <img src="/images/ironhack-logo.svg" alt="" />
        <img src="/images/menu-top.svg" alt="" />
      </nav>
    );
  }
}

export default Navbar;

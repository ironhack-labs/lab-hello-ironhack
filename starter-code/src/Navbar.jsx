import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <ul className="nav-link">
            <img src="/images/ironhack-logo.svg" alt="" />
            <img src="/images/menu-top.svg" alt="" />
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;

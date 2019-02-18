import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <div>
            <img src="/images/ironhack-logo.svg" />
          </div>
        </div>
        <div className="menu">
          <img src="/images/menu-top.svg" />
        </div>
      </div>
    );
  }
}

export default NavBar;

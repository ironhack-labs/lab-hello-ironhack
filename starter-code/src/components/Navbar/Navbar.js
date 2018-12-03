import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
        <img src="/images/menu-top.svg" alt="menu-top"/>
      </div>
    );
  }
}

export default Navbar;
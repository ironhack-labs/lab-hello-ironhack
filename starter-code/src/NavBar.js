import React, { Component } from "react";


class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <img src="../images/ironhack-logo.svg" alt="logo"/>
        <div className="burger">
        <img src="../images/menu-top.svg" alt="burger"/>
      </div>
      </div>
      
    );
  }
}

export default NavBar;
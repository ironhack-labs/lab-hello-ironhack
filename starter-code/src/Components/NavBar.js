import React, { Component } from "react";
//import logo from '../public/images/ironhack-logo.png';

class NavBar extends Component {
  render() {
    return (
      <div className="nav">
         <img src="/images/ironhack-logo.svg" />
         <img src="/images/menu-top.svg" />
      </div>
    );
  }
}

export default NavBar;
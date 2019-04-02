import React, { Component } from 'react';

class NavBar extends Component {
    render() {
      return (
        <div className="navStyle">
        <img src={process.env.PUBLIC_URL + "images/ironhack-logo.svg"} alt="img"/>
        <img src={process.env.PUBLIC_URL + "images/menu-top.svg"} alt="burger"/>
      </div>
      );
    }
  }
export default NavBar;
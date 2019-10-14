import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <div className="images">
            <img src='images/ironhack-logo.svg' />
            <img src='images/menu-top.svg' />
          </div>
        <div className="text">
        <h1 className="h1Header">Say hello to ReactJS</h1>
        <h2 className="h2Header">You will learn a Frontend framework from scratch, to become an Ninka Developer.</h2>
        <button>Awesome!</button>
        </div>
      </div>
    );
  }
}

export default Header;
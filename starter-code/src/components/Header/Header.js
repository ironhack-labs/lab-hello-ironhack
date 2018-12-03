import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 id="title">Say hello to ReactJS</h1>
        <p id="text">You will learn a FrontEnd framework from scratch, to become a Ninja Developer</p>


        <button id="awesome">Awesome!</button>
      </div>
    );
  }
}

export default Header;
import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {

      return (
        <div className= "background-header">
            <div className="top-part">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
            </div>
            <div>
          <h1>Say Hello to ReactJS!</h1>
          <p>You will learn how to use the most popular frontend library and become a super Ninja developer</p>
          <button >Awesome!</button>

            </div>
        </div>
      );
  }
}

export default Header;


import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="text">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            you will learn a frontend <br /> framework from scratch to <br />
            become a ninja developer.
          </p>
          <button>awesome!</button>
        </div>

        <img src="../images/react-logo.svg" />
      </div>
    );
  }
}
export default Header;

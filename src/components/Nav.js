import React, { Component } from "react";

class Nav extends Component {
    render() {
      return (
      <nav className="nav">

          <div className="nav-logo">
              <img alt="ironhack-logo" src="images/ironhack-logo.svg"/>
          </div>

          <div className="nav-menu">
              <img alt="menu-top" src="images/menu-top.svg"/>
          </div>

      </nav>
      );
    }
  }

  export default Nav;
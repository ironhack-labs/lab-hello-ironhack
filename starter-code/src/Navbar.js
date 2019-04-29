import React, { Component } from 'react'
import '../public/stylesheets/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav>
          <div className="navbar-logo">
            <img src="images/ironhack-logo.svg" alt=""/>
          </div>
          <div className="navbar-menu">
            <img src="images/menu-top.svg" alt=""/>
          </div>
      </nav>
    )
  }
}

export default Navbar;
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="navbar">
          <img className="logo-img" src="images/ironhack-logo.svg" alt="logo" />
          <img className="menu-img" src="images/menu-top.svg" alt="menu" />
        </nav>
      </div>
    )
  }
}

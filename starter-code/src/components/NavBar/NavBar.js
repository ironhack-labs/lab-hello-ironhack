import React, { Component } from 'react'
import "./NavBar.css";

export default class Header extends Component {
  constructor() {
    super()
    this.logo = "./images/ironhack-logo.svg";
    this.menu = {icon: "./images/menu-top.svg"};
  }

  render() {
    return (
      <div className='NavBar'>
          <h1><img src={this.logo} alt="Ironhack logo"/></h1>
          <nav><img src={this.menu.icon} alt="icon dropdown menu"/></nav>
      </div>
    )
  }
}
import React, { Component } from "react";
import './Logos.css'

class Logos extends Component {
  render(){
    return (
      <header>
      <img className="ironhack-logo" src="../images/ironhack-logo.svg" type="image/svg" />
      <img className="menu-top" src="../images/menu-top.svg" type="image/svg" />
      </header>

    )
  }
}

export default Logos


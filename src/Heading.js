import React, { Component } from "react";
import "./App.css";

let ironhacklogo = "images/ironhack-logo.svg"
let menutop = "images/menu-top.svg"


class Heading extends Component {
  render() {
    return (
      <header>
        <img src={ironhacklogo}></img>
        <img src={menutop}></img>
      </header>
    )
  }

}


export default Heading;
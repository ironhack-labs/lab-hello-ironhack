import React, { Component } from "react";

let ironhacklogo = "./images/ironhack-logo.svg";
let menutop = "./images/menu-top.svg";

class Heading extends Component {
  render() {
    return (
      <header>
        <img src={ironhacklogo} alt=""></img>
        <img src={menutop} alt=""></img>
      </header>
    );
  }
}

export default Heading;

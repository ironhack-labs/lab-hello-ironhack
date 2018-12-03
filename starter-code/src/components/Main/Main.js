import React, { Component } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar.js"
import Header from "../Header/Header.js"

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Navbar></Navbar>
        <Header></Header>
      </div>
    );
  }
}

export default Main;
import React, { Component } from "react";
import "./App.css";
import FooterBox from "../public/components/FooterBox";
import AwesomeButton from "../public/components/AwesomeButton"
import Logo from "../public/components/Logo"
import MenuBurger from "../public/components/MenuBurger"

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="dark">
        <div className="nav-bar">
            <Logo></Logo>
            <MenuBurger></MenuBurger>
        </div>
        <div className="leftText">
        <h1 className="h1 color-white">Say hello to ReactJS</h1>
        <p className="color-white p">You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
        </div>
        <br></br>
        <AwesomeButton></AwesomeButton>
        </main>
        <FooterBox></FooterBox>
          
      </div>
    );
  }
}

export default App;


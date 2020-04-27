import React, { Component } from "react";
import Card from "./Card"
import "./App.css";

const ironhackLogo = "/images/ironhack-logo.svg";
const burgerMenu = "/images/menu-top.svg";
const reactLogo = "/images/react-logo.svg";
const icon1 =  "/images/icon1.png";
const icon2 =  "/images/icon2.png";
const icon3 =  "/images/icon3.png";
const icon4 =  "/images/icon4.png";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="upper-section">
          <nav className="nav-bar">
            <img src={ironhackLogo} alt="" />
            <img src={burgerMenu} alt="" />
          </nav>

          <img className="react-logo" src={reactLogo} />

          <section className="main-text">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja developer
            </p>
          </section>

          <button>Awesome!</button>
        </div>

        <div className="bottom-section">
          <Card src={icon1} title="Declarative" />
          <Card src={icon2} title="Components" />
          <Card src={icon3} title="Single-Way" />
          <Card src={icon4} title="JSX" />
        </div>

      </div>
    );
  }
}

export default App;

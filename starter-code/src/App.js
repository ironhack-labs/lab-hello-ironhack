import React, { Component } from "react";
import "./App.css";

const IHlogo = "images/ironhack-logo.svg";
const menuTop = "images/menu-top.svg";
const reactLogo = "images/react-logo.svg";

const icon1 = "images/icon1.png";
const icon2 = "images/icon2.png";
const icon3 = "images/icon1.png";
const icon4 = "images/icon1.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="react">
          <div className="logos">
            <img className="ih-logo" src={IHlogo}></img>
            <img className="menu-img" src={menuTop}></img>
          </div>

          <div className="info">
            <div className="mid-info">
              <h1>Say Hello to ReactJS</h1>
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer
              </p>
              <button className="btn">Awesome!</button>
            </div>

            <div>
              <img className="react-logo" src={reactLogo}></img>
            </div>
          </div>
        </div>

        <div className="icon-info-container">
            <div className="icon-info">
                <img src={icon1}></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icon-info">
                <img src={icon2}></img>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="icon-info">
                <img src={icon3}></img>
                <h2>Single-way</h2>
                <p>A set of immutable values are passed to the components's.</p>
            </div>
            <div className="icon-info">
                <img src={icon4}></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;

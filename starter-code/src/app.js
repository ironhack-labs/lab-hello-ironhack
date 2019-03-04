import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="Landing">
            <div className="Navbar">
              <img src="../images/ironhack-logo.svg" />
              <img className="menu" src="../images/menu-top.svg" />
            </div>
            <div className="Header">
              <h2><strong>Say Hello to ReactJS</strong></h2>
              <span>You will learn about a frontend framework from scratch, to become a ninja developer</span>
              <br></br>
              <button className="header-button">Awesome!</button>
            </div>
          </div>
          <div className="footer">
            <div className="Icons">
              <div className="Icon1">
                <img src="../images/icon1.png" />
                <h2>Declarative</h2>
                <p>React makes it painless to create UI's.</p>
              </div>
              <div className="Icon2">
                <img src="../images/icon2.png" />
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
              </div>
              <div className="Icon3">
                <img src="../images/icon3.png" />
                <h2>Single-Way</h2>
                <p>A set of immutable values are passed to their component's.</p>
              </div>
              <div className="Icon4">
                <img src="../images/icon4.png" />
                <h2>JSX</h2>
                <p>Statically typed, designed to run on modern browsers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
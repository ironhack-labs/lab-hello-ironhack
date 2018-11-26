import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="div-top">
          <div className="nav">
            <div id="logo">
              <img src="/images/ironhack-logo.svg" />
            </div>
            <div id="menu">
              <img src="/images/menu-top.svg" />
            </div>
          </div>
          <div className="menu-top">
            <h1>Say Hello to ReactJS</h1>
            <h2>
              You will learn a Frontend framework from scratch, to become a
              ninja developer
            </h2>
            <button> Awesome! </button>
          </div>
        </div>
        <div className="menu-botton">
          <ul>
            <li>
              <img src="/images/icon1.png" />
              <h3>Declarative</h3>
              <p>React makes it painless to create interactive Uis.</p>
            </li>
            <li>
              <img src="/images/icon2.png" />
              <h3>Components</h3>
              <p>Build encapsulated components that manage their state.</p>
            </li>
            <li>
              <img src="/images/icon3.png" />
              <h3>Single-Way</h3>
              <p>A set inmutable values are passed to their component's</p>
            </li>
            <li>
              <img src="/images/icon4.png" />
              <h3>JSX</h3>
              <p>Statically-typed, designed to run on modern browsers</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

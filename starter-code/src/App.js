import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header>
          <img src="/images/ironhack-logo.svg" />
          <img className="burger-menu" src="/images/menu-top.svg" />
        </header>
        <div className="top-content">
          <div className="left-content">
            <h1>Say Hello to ReactJS</h1>
            <p>
              You will learn a Frontend framwork from scratch, and become a
              Ninja Dev
            </p>
            <button>AWSOME</button>
          </div>
          <div className="right-content">
            <img id="image1" src="/images/react-logo.svg" />
            <img id="image2" src="/images/react-logo.svg" />
            <img id="image3" src="/images/react-logo.svg" />
          </div>
        </div>
        <div className="bottom-content">
          <div className="logo1">
            <img src="/images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to creat interactive UIs</p>
          </div>
          <div className="logo2">
            <img src="/images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="logo3">
            <img src="/images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="logo4">
            <img src="/images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

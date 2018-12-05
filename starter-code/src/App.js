import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav.js";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="container-top">
          <Nav />
          <div className="container-text">
            <h1 className="container-text-title">Say Hello to ReactJS</h1>
            <p className="descriptive-text" >
            You will learn a frontend framework from scratch,to become a Ninka Developer.
            </p>
            <button className="container-text-btn btn btn-white">
              Awesome
            </button>
          </div>
          <img className="floating-logo" src="/images/React-icon.svg.png" alt="" />
        </div>

        <div className="footer">
          <div className="footer-container">
            <img src="/images/icon1.png" alt="" />
            <h3 className="footer-title">Declarative</h3>
            <p className="descriptive-text" >
            React makes it painless to create interactive Uis.
            </p>
          </div>

          <div className="footer-container">
            <img src="/images/icon2.png" alt="" />
            <h3 className="footer-title">Components</h3>
            <p className="descriptive-text" >
            Build encapsulated components that manage their state.
            </p>
          </div>

          <div className="footer-container">
            <img src="/images/icon3.png" alt="" />
            <h3 className="footer-title">Single-Way</h3>
            <p className="descriptive-text" >              
              A set of immutable values are passed to the components.
            </p>
          </div>

          <div className="footer-container">
            <img src="/images/icon4.png" alt="" />
            <h3 className="footer-title">JSX</h3>
            <p className="descriptive-text" >
              Statically-typed, designed to run on  modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


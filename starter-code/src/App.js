import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing-div">
            <nav className="navbar">
                <img src="images/ironhack-logo.svg" className="ironhack-logo"></img>
                <img src="images/menu-top.svg" className="hamburger-icon"></img>
            </nav>
            <div className="landing-content">
                <h1 className="page-title">Say hello to ReactJS</h1>
                <h4>You will learn a Frontend framework from scratch, to become a Ninja Developer</h4>
                <button className="awesome-button">Awesome!</button>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="column">
                    <img src="images/icon1.png" className="comp-image"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className="column">
                    <img src="images/icon2.png" className="comp-image"></img>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className="column">
                    <img src="images/icon3.png" className="comp-image"></img>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div className="column">
                    <img src="images/icon4.png" className="comp-image"></img>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div className="App">
    <div className="top-section">
      <div className="header">
        <img src = "/images/ironhack-logo.svg"></img>
        <img src = "/images/menu-top.svg"></img>
        </div>
        <h1> Say hello to ReactJS </h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <button className="awesome-button">Awesome!</button>
      </div>
      <div className ="icons-list">
        <div className="icon-box">
          <img src = "/images/icon1.png"></img>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
          </div>
        <div className="icon-box">
          <img src = "/images/icon2.png"></img>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
          </div>
        <div className="icon-box">
          <img src = "/images/icon3.png"></img>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's</p>
          </div>
        <div className="icon-box">
          <img src = "/images/icon4.png"></img>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
      </div>
      </div> 
     
    );
  }
}

export default App;
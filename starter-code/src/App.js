import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <img id = "logo" src = "/images/ironhack-logo.svg"/>
          <img id = "menu-icon" src = "/images/menu-top.svg"/>
        </div>
        <div className = "black-wrapper">
          <h1>
            Say hello to 
            <br/>ReactJS
          </h1> 
          <p>
            You will learn a Frontend framework from scratch, to become a Ninja Developer
          </p>
          <button id = "awesome-btn">Awesome!</button>
        </div>
        <div className = "card-wrapper">
          <div className = "card">
            <img src = "/images/icon1.png"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className = "card">
            <img src = "/images/icon2.png"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className = "card">
            <img src = "/images/icon3.png"/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className = "card">
            <img src = "/images/icon4.png"/>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
        {/* <h1> Hello Ironhackers! </h1> */}
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div>
      <div className="bg1">
        <div className="App">
    
          <img src="../images/ironhack-logo.svg"/>
          <img className="menu" src="../images/menu-top.svg"/>
          <div className="text">
            <h1> Say hello to ReactJS </h1>
            <span className="sub-text">You will learn a Frontend framework from scratch, to become a Ninja Developer</span><br></br>
            <button className="button">Awesome!</button>
          </div>
        </div>
      </div>
      <div className="bg2">
        <div className="App2">
          <div className="icon">
            <img src="../images/icon1.png"/>
            <h3>Declarative</h3>
            <span className="sub-text2">React makes it painless to create interactive UIs</span>
          </div>
          <div className="icon">
            <img src="../images/icon2.png"/>
            <h3>Components</h3>
            <span className="sub-text2">Build encapsulated components that manage their state.</span>
          </div>
          <div className="icon">
            <img src="../images/icon3.png"/>
            <h3>Single-Way</h3>
            <span className="sub-text2">A set of immutable values are passed to the component's.</span>
          </div>
          <div className="icon">
            <img src="../images/icon4.png"/>
            <h3>JSX</h3>
            <span className="sub-text2">Statically-typed, designed to run on modern browsers.</span>
          </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
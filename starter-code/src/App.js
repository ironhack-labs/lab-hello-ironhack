import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="first-block">
          <img src="../images/ironhack-logo.svg"></img>
          <h1> Say hello to ReactsJS </h1>
          <h2> You will learn a Frontend framework from scratch, to decome a Ninja Developper</h2>
          <button className="button">Awesome!</button>
        </div>
        <div class="second-block">
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
              <span className="sub-text2">Statically-typed, designed to run on modern browsers</span>
            </div>

        </div>
      </div>
    );
  }
}

export default App;
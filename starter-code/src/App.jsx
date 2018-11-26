import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render () {
    return (
      <div>
      <nav className="front-panel-nav">
        <img src="/images/ironhack-logo.svg"></img>
      </nav>
        <div className="front-panel-main">

          <h1>Say Hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
          <button>Awesome!</button>
        </div>

        <div className="front-panel-cards">

          <div className="front-panel-cards-tile">
            <img src="/images/icon1.png"></img>
            <h2>Declarative</h2>
            <span>React makes it painless to create interactive UIs.</span>
          </div>
          
          <div className="front-panel-cards-tile">
            <img src="/images/icon2.png"></img>
            <h2>Components</h2>
            <span>Build encapsulated components that manage their state.</span>
          </div>

          <div className="front-panel-cards-tile">
            <img src="/images/icon3.png"></img>
            <h2>Single-Way</h2>
            <span>A set of immutable values are passed to the components.</span>
          </div>

          <div className="front-panel-cards-tile">
            <img src="/images/icon4.png"></img>
            <h2>JSX</h2>
            <span>Statically-typed, designed to run on modern browsers.</span>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
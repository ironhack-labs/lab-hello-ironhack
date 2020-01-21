import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render () {
    return (
      <div>
      <div className="main">
      <div className="nav-bar">
      <img src="/images/ironhack-logo.svg" alt="Ironhack's logo" />
      <img src="/images/menu-top.svg" alt="Menu" />
      </div>
      <div className="content">
      <h1> Say hello to ReactJS </h1>
      <p> You will learn a Frontend framework from scratch to become a Ninja Developer </p>
      <a className="btn" href="#">Awesome!</a>
      </div>
      </div>
      <div className="details">
      <div className="format-details">
      <img src="/images/icon1.png" alt="illustrative image 1" />
      <h3> Declarative</h3>
      <p> React makes it painless to create interactive UIs.</p>
      </div>
      <div className="format-details">
      <img src="/images/icon2.png" alt="illustrative image 1" />
      <h3> Components</h3>
      <p> Build encapsulated components that manage their state.</p>
      </div>
      <div className="format-details">
      <img src="/images/icon3.png" alt="illustrative image 1" />
      <h3> Single-Way</h3>
      <p> A set of immutable values are passed to the components.</p>
      </div>
      <div className="format-details">
      <img src="/images/icon4.png" alt="illustrative image 1" />
      <h3> JSX</h3>
      <p> Statically-typed designed to run on modern browsers.</p>
      </div>
      </div>
      </div>
    )

  }
}

export default App;
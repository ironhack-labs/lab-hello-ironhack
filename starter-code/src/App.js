import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="header">
          <div className="section logo nav d-flex flex-row justify-content-between">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </div>
          <div className="section" id="title">
            <h1>Say Hello to ReactJS</h1>
            <h4>
              You will learn a Frontend framework from the scratch to become a
              Ninja Developer
            </h4>
          </div>
          <button class="section button" type="button">
            Awesome!
          </button>
        </div>
        <div className="body1 d-flex flex-row justify-content-around">
          <div className="card">
            <img src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to createinteractive UIs.</p>
          </div>
          <div className="card">
            <img src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="card">
            <img src="/images/icon3.png" />
            <h2>Singe-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="card">
            <img src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

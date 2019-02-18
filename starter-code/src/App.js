import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container-top">
          <img id="img-top-left" src="images/ironhack-logo.svg" />
          <img id="img-top-right" src="images/menu-top.svg" />

          <h1>
            Say hello to <br /> React JS
          </h1>
          <h2>
            You will learn a FrontEnd framework from scratch, to become a Ninja
            Developer.
          </h2>

          <div id="button">
            <h3>Awesome!</h3>
          </div>
        </div>

        <div class="container-bottom">
          <div class="card">
            <img src="images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div class="card">
            <img src="images/icon2.png" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div class="card">
            <img src="images/icon3.png" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div class="card">
            <img src="images/icon4.png" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

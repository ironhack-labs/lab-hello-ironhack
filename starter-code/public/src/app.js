import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="main">
          <nav>
            <img src="./images/ironhack-logo.svg" alt="logo-ironhack" />
            <img src="./images/menu-top.svg" alt="menu-top" />
          </nav>
          <div class="main-text">
            <h1>Say hello to ReactJS</h1>
            <h3>
              You will learn a Frontend framework from scratch, to become an
              Ninka Developer
            </h3>
            <button>Awesome!</button>
          </div>
        </div>
        <div class="sections">
          <div class="sec-int">
            <img src="./images/icon1.png" alt="icon1" />
            <h4>Declarative</h4>
            <p>React makes it paintless to create interactive UIs</p>
          </div>
          <div class="sec-int">
            <img src="./images/icon2.png" alt="icon2" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div class="sec-int">
            <img src="./images/icon3.png" alt="icon3" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component’s.</p>
          </div>
          <div class="sec-int">
            <img src="./images/icon4.png" alt="icon4" />
            <h4>JSX</h4>
            <p>Statically-typed. desgined to run on modern broswers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

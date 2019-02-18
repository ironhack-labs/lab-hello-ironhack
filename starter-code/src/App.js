import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="top">
          <img src="./images/ironhack-logo.svg" />
          <img src="./images/menu-top.svg" className="menu" />
        </div>
        <div className="part1">
          <h1 className="hello">
            Say hello to <br />
            ReactJS
          </h1>
          <p className="text">
            You will learn a Frontend <br />
            framework from scratch, to <br />
            become a Ninka developer.
          </p>
          <button className="button">Awesome!</button>
        </div>
        <div className="white-part">
          <div className="icon">
            <div class="onglets">
              <img src="./images/icon1.png" class="imgpart2" />
              <h2>Declarative</h2>
              <p className="text2">
                React makes it painless to create interactive UIs.
              </p>
            </div>
            <div class="onglets">
              <img src="./images/icon2.png" class="imgpart2" />

              <h2>Components</h2>
              <p className="text2">
                Build encapsulated components that manage their state.
              </p>
            </div>
            <div class="onglets">
              <img src="./images/icon3.png" class="imgpart2" />
              <h2>Single-Way</h2>
              <p className="text2">
                A set of immutable values are passed to the component's.
              </p>
            </div>
            <div class="onglets">
              <img src="./images/icon4.png" class="imgpart2" />
              <h2>JSX</h2>
              <p className="text2">
                Statically-typed, designed to run on modern browsers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

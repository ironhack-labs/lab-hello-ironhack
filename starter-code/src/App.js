import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header>
            <img
              className="header-img-size"
              src="./images/ironhack-logo.svg"
              alt="Ironhack Logo"
            />
            <img
              className="header-img-size2"
              src="./images/menu-top.svg"
              alt="Menu Logo"
            />
          </header>

          <div>
            <h1>
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn a Frontend <br /> framework from scratch, to <br />
              become a Ninja Developer.
            </p>
            <div className="space">
              <a href="#" id="btn">
                Awesome!
              </a>
            </div>
          </div>
        </div>

        <div className="second-container">
          <div>
            <img src="./images/icon1.png" />
            <h2>Declarative</h2>
            <span>
              React makes it <br /> painless to create <br /> interactive UIs.
            </span>
          </div>

          <div>
            <img src="./images/icon2.png" />
            <h2>Components</h2>
            <span>
              Build encapsulated <br /> components that <br /> manage their
              state.
            </span>
          </div>

          <div>
            <img src="./images/icon3.png" />
            <h2>Single-Way</h2>
            <span>
              A set of immutable <br /> values are passed to <br /> the
              component's.
            </span>
          </div>

          <div>
            <img src="./images/icon4.png" />
            <h2>JSX</h2>
            <span>
              Statically-typed, <br /> designed to run on <br /> modern
              browsers.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const reactLogo = <img src="images/react-logo.svg" width="300" />;
    return (
      <div>
        <div className="blue-container">
          <div className="header">
            <img src="images/ironhack-logo.svg" height="60" />
            <img src="images/menu-top.svg" height="15" />
          </div>
          <div className="text-container">
            <h1 className="title">
              {" "}
              Say hello to <br />
              ReactJS{" "}
            </h1>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to
              <br /> become an Ninja Developer
            </p>
            <button>Awesome</button>
          </div>
        </div>
        <div className="icones">
          <div>
            <img src="images/icon1.png" />
            <h3>Declarative</h3>
            <p>
              React makes it <br />
              painless to create <br />
              interactive UIs
            </p>
          </div>
          <div>
            <img src="images/icon2.png" />
            <h3>Components</h3>
            <p>
              Build encapsulated <br />
              components that <br />
              manage their state
            </p>
          </div>
          <div>
            <img src="images/icon3.png" />
            <h3>Single-Way</h3>
            <p>
              A set of immutable <br />
              values are passed to <br />
              the component's
            </p>
          </div>
          <div>
            <img src="images/icon4.png" />
            <h3>JSX</h3>
            <p>
              Statically-typed, <br />
              designed to run on <br />
              modern brownsers
            </p>
          </div>
        </div>
        <div className="text-icones"></div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="general">
        <div className="background">
          <div className="nav">
            <img
              src="/images/ironhack-logo.svg"
              alt="Ironhack icon"
              height="50"
              width="50"
            />
            <img
              src="/images/menu-top.svg"
              alt="Menu Icon"
              height="30"
              width="30"
            />
          </div>
          <div>
            <div className=" text">
              <h1 className="white"> Say hello to ReactJS </h1>
              <p className="white">
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer
              </p>
              <button className="button" type="button">
                Awesome!
              </button>
            </div>
            <div className="atomBack">
              <img
                src="/images/react-logo.svg"
                alt="React logo"
                height="500"
                width="500"
              />
            </div>
          </div>
        </div>
        <div className="flexCards">
          <div className="card">
            <img src="/images/icon1.png" alt="Icon1" height="120" width="120" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="card">
            <img src="/images/icon2.png" alt="Icon2" height="120" width="120" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="card">
            <img src="/images/icon3.png" alt="Icon3" height="120" width="120" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className="card">
            <img src="/images/icon4.png" alt="Icon4" height="120" width="120" />
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

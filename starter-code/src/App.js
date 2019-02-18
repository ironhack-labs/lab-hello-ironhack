import React, { Component } from "react";

import "./App.css";

// images :

const picto1 = <img src="./images/icon1.png" />;
const picto2 = <img src="./images/icon2.png" />;
const picto3 = <img src="./images/icon3.png" />;
const picto4 = <img src="./images/icon4.png" />;
const nav = <img src="./images/menu-top.svg" />;
const logo = <img src="./images/ironhack-logo.svg" />;
const reactLogo = <img src="./images/react-logo.svg" />;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">{logo}</div>
          <div className="nav">{nav}</div>
        </header>

        <section id="bg-color">
          <div id="sec1">
            <h1>
              Say hello to
              <br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend
              <br />
              framework from scratch to
              <br />
              become a Ninja developer{" "}
            </p>
            <a className="btn-main" href="#0">
              Awesome!
            </a>
          </div>
          <div className="bg-img1">{reactLogo}</div>
          <div className="bg-img2">{reactLogo}</div>
          <div className="bg-img3">{reactLogo}</div>
        </section>
        <section id="sec2">
          <div>
            {picto1}
            <h2>Declarative</h2>
            <p>React makes it painlessto create interactive UIs.</p>
          </div>
          <div>
            {picto2}
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            {picto3}
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            {picto4}
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on moderne browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}
export default App;

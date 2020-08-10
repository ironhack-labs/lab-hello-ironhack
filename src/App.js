import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="maindiv">
        <header>
          <div className="navimage">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top-svg"> </img>
          </div>
          <div className="container">
            <h1>
              Say hello to <br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to
              <br />
              become a Ninka Developer
            </p>
            <button>Awesome!</button>
          </div>
        </header>
        <main>
          <div className="declarative">
            <img src="/images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>
              React makes it <br />
              painless to create
              <br />
              interactive UIs.
            </p>
          </div>
          <div className="components">
            <img src="/images/icon2.png"></img>
            <h3>Components</h3>
            <p>
              Build encapsulated
              <br />
              components that
              <br />
              manage their state.
            </p>
          </div>
          <div className="singleway">
            <img src="/images/icon3.png"></img>
            <h3>Single-Way</h3>
            <p>
              A set of inmutable
              <br />
              values are passed to
              <br />
              the component's.
            </p>
          </div>
          <div className="components">
            <img src="/images/icon4.png"></img>
            <h3>JSX</h3>
            <p>
              Statically-typed,
              <br />
              designed to run on
              <br />
              modern browsers.
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

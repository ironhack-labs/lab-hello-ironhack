import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="Banner">
          <nav className="Navbar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </nav>
          
          <h1> Say hello to ReactJS! </h1>
          <p>
            You will learn a Frontend framework from scratch, to become an Ninja
            Developer.
          </p>
          <button>Awesome!</button>
        </section>

        <section className="Info">
          <div className="Box">
            <img src="/images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="Box">
            <img src="/images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="Box">
            <img src="/images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="Box">
            <img src="/images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

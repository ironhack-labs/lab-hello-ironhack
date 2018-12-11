import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="cover">
          <header className="header">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </header>
          <section className="text">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer
            </p>
            <button>Awesome!</button>
          </section>
        </section>

        <section className="blocks">
          <div>
            <img src="/images/icon1.png" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src="/images/icon2.png" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src="/images/icon3.png" />
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src="/images/icon4.png" />
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

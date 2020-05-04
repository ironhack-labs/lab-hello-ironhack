import React, { Component } from "react";
import { ReactSVG } from "react-svg";
import "./App.css";
import Home from "./components/Home";
import Benefits from "./components/Benefits"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <section className="benefits">
          <Benefits
            image="images/icon1.png"
            title="Declarative"
            description="React makes it painless to create interactive UIs."
          />
          <Benefits
            image="images/icon2.png"
            title="Components"
            description="Build encapsulated components that manage their state."
          />
          <Benefits
            image="images/icon3.png"
            title="Single-Way"
            description="A set of immuable values are passed to component's."
          />
          <Benefits
            image="images/icon4.png"
            title="JSX"
            description="Statically-typed, designed to run on modern browsers."
          />
        </section>
      </div>
    );
  }
}

export default App;

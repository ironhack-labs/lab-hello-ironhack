import React, { Component } from "react";
import "./App.css";

import Nav from "./components/Nav";
import Title from "./components/Title";
import SubText from "./components/SubText";
import Button from "./components/Button";
import Bottom from "./components/Bottom";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="header">
        <Nav/>
        </div>
        <div className="bottom">
        <Bottom
          image="/images/icon1.png"
          title="Declarative"
          text="React makes it painless to create inetractive UIs."
        />

        <Bottom
          image="/images/icon2.png"
          title="Components"
          text="Build encapsulated components that manage their state."
        />

        <Bottom
          image="/images/icon3.png"
          title="Single-Way"
          text="A set of immutable values are passed to the cmponents."
        />

        <Bottom
          image="/images/icon4.png"
          title="JSX"
          text="Statically-typed, designed to run on modern browsers."
        />
        </div>
      </div>
    );
  }
}

export default App;

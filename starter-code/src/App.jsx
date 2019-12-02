import React, { Component } from "react";
import logo from "./ironhack-logo.svg";
import "./App.css";
import JSX from "./JSX.jsx";
import SingleWay from "./SingleWay.jsx";
import Declarative from "./Declarative.jsx";
import Components from "./Components.jsx";
import Button from "./Button.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <article>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become a
              Ninja Developer. <Button />
            </p>
          </article>

          <section>
            <Declarative />
            <Components />
            <SingleWay />
            <JSX />
          </section>
        </header>
      </div>
    );
  }
}

export default App;

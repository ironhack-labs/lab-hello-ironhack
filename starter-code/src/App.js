import React, { Component } from "react";
import "./App.css";
import "../src/App.css";

class App extends Component {
  render() {
    const header = (
      <div className="header">
        <img src="../public/images/ironhack-logo.svg" />
      </div>
    );
    const intro = (
      <div className="intro">
        <div className="box">
          <h1> Say hello to ReactJS! </h1>
          <h2>
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer.
          </h2>
        </div>
        <button>Awesome!</button>
      </div>
    );

    const bottomDiv = (
      <div className="bottom-div">
        <div className="card">
          <img src="../public/images/icon1.png" attr="icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="card">
          <img src="../public/images/icon2.png" attr="icon" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="card">
          <img src="../public/images/icon3.png" attr="icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are poassed to the components.</p>
        </div>
        <div className="card">
          <img src="../public/images/icon4.png" attr="icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    );

    return (
      <div className="App">
        {header}
        {intro}
        {bottomDiv}
      </div>
    );

    return intro;
  }
}

export default App;

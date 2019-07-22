import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="principal">
          <nav>
            <img src="./images/ironhack-logo.svg"></img>
            <img src="./images/menu-top.svg"></img>
          </nav>
          <div className="title">
            <h1> Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch, to become an Ninja Developer.</p>
          </div>
          <button>Awesome!</button>
          {/* <img className="img-big" src="./images/react-logo.svg"></img>
          <img className="img-big" src="./images/react-logo.svg"></img>
          <img className="img-big" src="./images/react-logo.svg"></img>
          <img className="img-small" src="./images/react-logo.svg"></img>
          <img className="img-small" src="./images/react-logo.svg"></img>
          <img className="img-small" src="./images/react-logo.svg"></img> */}
        </section>
      <div className="Icons">
        <div className="icon">
          <img src="./images/icon1.png"></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon">
          <img src="./images/icon2.png"></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon">
          <img src="./images/icon3.png"></img>
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="icon">
          <img src="./images/icon4.png"></img>
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="general">
          <div className="container-izq">
            <img id="img-logo" src="./images/ironhack-logo.svg" />
            <div className="principal-text">
              <h1> Say Hello to ReactJS </h1>
              <p className="secundary-text">
                {" "}
                You will learn a Fronted framework from scrath, to becaome an
                Ninka Developer{" "}
              </p>
            </div>
            <img className="menu" src="./images/menu-top.svg" />
          </div>
          <a className="btn-awasome" href="#">
            {" "}
            Awasome!
          </a>
        </div>
        <div className="icons">
          <div className="icon">
            <img src="./images/icon1.png" />
            <h2>Declaratives</h2>
            <p>React makes it painless to createinteractives UIs</p>
          </div>
          <div className="icon">
            <img src="./images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage heir state</p>
          </div>
          <div className="icon">
            <img src="./images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component´s</p>
          </div>
          <div className="icon">
            <img src="./images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

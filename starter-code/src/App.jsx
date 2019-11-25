import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="full-content">
        <div className="test">
          <header className="header-content">
            <nav>
              <img src="/images/ironhack-logo.svg" />
              <img src="/images/menu-top.svg" />
            </nav>
          </header>
          <div className="body-content">
            <h1 className="titre">
              Say hello to <br /> ReactJS
            </h1>
            <p className="infos">
              You will learn a FrontEnd <br /> framework from scratch, to <br />
              becaome an Ninka Developer.
            </p>
            <button className="Awesome">Awesome!</button>
          </div>
        </div>
        <footer className="footer-content">
          <div className="single-content">
            <img src="/images/icon1.png" className="image" />
            <h3>Declarative</h3>
            <p className="description">
              React makes it painless to create interactive UIs
            </p>
          </div>
          <div className="single-content">
            <img src="/images/icon2.png" className="image" />
            <h3>Components</h3>
            <p className="description">
              Build encapsulated components that manage their state
            </p>
          </div>
          <div className="single-content">
            <img src="/images/icon3.png" className="image" />
            <h3>Single-Way</h3>
            <p className="description">
              A set of immutable values are passed to the component's
            </p>
          </div>
          <div className="single-content">
            <img src="/images/icon4.png" className="image" />
            <h3>JSX</h3>
            <p className="description">
              Statically-typed, designed to run on modern browsers
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

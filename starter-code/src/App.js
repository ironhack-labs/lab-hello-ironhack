import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="top-header">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </div>
          <div className="header-content">
            <h1>Say hello to <br />ReactJS</h1>
            <p>You will learn a Frontend <br />Framework from scratch, to<br /> become a Ninja Developer</p>
            <a href="#">Awesome!</a>
          </div>
        </header>

        <section className="blurbs">
          <div className="blurb">
            <img src="/images/icon1.png" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="blurb">
            <img src="/images/icon2.png" />
            <h3>Components</h3>
            <p>Build encapsulated componentes that manage their state.</p>
          </div>
          <div className="blurb">
            <img src="/images/icon3.png" />
            <h3>Single-Way</h3>
            <p>A set of inmutable values are passed to the component´s.</p>
          </div>
          <div className="blurb">
            <img src="/images/icon4.png" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
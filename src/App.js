import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="main">
          <div className="first-page">
            <nav>
              <img src="/images/ironhack-logo.svg" alt="" />
              <img src="/images/menu-top.svg" alt="" />
            </nav>
            <div className="divide-me">
              <div className="title">
                <h1>Say hello to ReactJS</h1>
                <h2>
                  You will learn a Frontend framework from scratch, to becaome
                  an Ninka Developer.
                </h2>
                <a>Awesome!</a>
              </div>
              <div className="background-image"></div>
            </div>
          </div>
        </section>

        <section className="icons">
          <div>
            <img src="/images/icon1.png" alt="" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div>
            <img src="/images/icon2.png" alt="" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
            <img src="/images/icon3.png" alt="" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div>
            <img src="/images/icon4.png" alt="" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

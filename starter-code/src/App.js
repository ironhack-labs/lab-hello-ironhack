import React, { Component } from "react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <section className="top">
          <nav>
            <img className="nav-img" src="../images/ironhack-logo.svg" />
            <img className="nav-img" src="../images/menu-top.svg" />
          </nav>
          <div className="welcome">
            <div className="intro">
              <h1>Say hello to React.JS</h1>
              <p className="summary">
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </p>
              <button>Awesome!</button>
            </div>
          </div>
        </section>
        <section className="bottom">
          <div className="discover">
            <article>
              <img src="../images/icon1.png" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs.</p>
            </article>
            <article>
              <img src="../images/icon2.png" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </article>
            <article>
              <img src="../images/icon3.png" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's.</p>
            </article>
            <article>
              <img src="../images/icon4.png" />
              <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

// export your component CLASS so that you can display in other files
// (this is like module.exports in Node.js)
export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="section1">
          <nav className="nav-bar">
            <img src="images/ironhack-logo.svg"></img>
            <img src="images/menu-top.svg"></img>
          </nav>

          <div className="container">
            <section>
              <div className="text">
                <h1> Say hello to ReactJS</h1>
                <p>You will learn a Frontend framwork from scratch, to become a Ninka Developer.</p>
              </div>

              <button className="button">Awesome!</button>
            </section>

            <section className="logo-container">
              <img src="images/react-logo.svg"></img>

              <div className="react-logo">
                <img className="small-log" src="images/react-logo.svg"></img>
                <img className="small-log" src="images/react-logo.svg"></img>
                <img className="small-log" src="images/react-logo.svg"></img>
              </div>
            </section>
          </div>
        </div>

        <div className="section2">
          <div className="section2-box">
            <img src="images/icon1.png"></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>

          <div className="section2-box">
            <img src="images/icon2.png"></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div className="section2-box">
            <img src="images/icon3.png"></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>

          <div className="section2-box">
            <img src="images/icon4.png"></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
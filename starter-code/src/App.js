import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="part1">
                <nav className="navigation">
                    <img src="./images/ironhack-logo.svg" />
                    <img src="./images/menu-top.svg" />
                </nav>
                <div className="main-info">
                    <h1 className="main-title">Say hello to<br></br> ReactJS</h1>
                    <p className="main-description">You will learn a Frontend<br></br> framework from scratch, to<br></br> become a Ninja Developer.</p>
                    <button className="main-button">Awesome!</button>
                </div>
          </div>
          <div className="part2">
              <div className="info-card">
                  <img src="/images/icon1.png"/>
                  <h2>Declarative</h2>
                  <p>React makes it painless to create interactive UIs.</p>
              </div>
              <div className="info-card">
                  <img src="/images/icon2.png"/>
                  <h2>Components</h2>
                  <p>Build encapsulated components that manage their state.</p>
              </div>
              <div className="info-card">
                  <img src="/images/icon3.png"/>
                  <h2>Single-way</h2>
                  <p>A set of immutble values are passed to the components.</p>
              </div>
              <div className="info-card">
                  <img src="/images/icon4.png"/>
                  <h2>JSX</h2>
                  <p>Statically-typed, designed to run on modern browsers.</p>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
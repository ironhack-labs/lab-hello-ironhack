import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="section-1">
          <nav>
            <img className="logo" src="./images/ironhack-logo.svg"></img>
            <img className="menu" src="./images/menu-top.svg"></img>
          </nav>
          <div className="container">
            <div>
              <h1> Say hello to ReactJS </h1>
              <h2> You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
              <button>Awesome!</button>
            </div>
            <div className="reacts">
              <div className="react-container-1">
                <img className="logo-react-1" src="./images/react-logo.svg"></img>
              </div>
              <div className="react-container-2">
                <img className="logo-react-2" src="./images/react-logo.svg"></img>
              </div>
              <div className="react-container-3">
                <img className="logo-react-3" src="./images/react-logo.svg"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="section-2">
          <article>
            <img src="./images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </article>
          <article>
            <img src="./images/icon2.png"></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </article>
          <article>
            <img src="./images/icon3.png"></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </article>
          <article>
            <img src="./images/icon4.png"></img>
            <h3>JSX</h3>
            <p>Statically-typed designed to run on mordern browsers.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
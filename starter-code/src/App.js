import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <nav>
            <img src="./images/ironhack-logo.svg"></img>
            <img src="./images/menu-top.svg"></img>
          </nav>
          <h1> Say hello to ReactJS </h1>
          <h2> You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
          <button>Awesome</button>
        </section>
        <section>
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
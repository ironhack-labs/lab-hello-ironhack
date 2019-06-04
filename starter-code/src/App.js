import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="reactLogo">
        <header>
          <img src="/images/ironhack-logo.svg" alt="ironhack-logo" className="ironhackLogo" ></img>
          <img src="/images/menu-top.svg" alt="menu-top" className="menu-top" ></img>
        </header>
          <h1> Say hello to ReactJS </h1>
            <p>Your will leard Frontend framework from scratch, to become a Ninja Developer.</p>
              <button>Awesome!</button>
        </div>
      <section className="container" >
        <article className="item">
          <img src="/images/icon1.png" alt="logo1" />
            <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs</p>
        </article>
          <article className="item">
          <img src="/images/icon2.png" alt="logo2" />
            <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
        </article>
          <article className="item">
          <img src="/images/icon3.png" alt="logo3" />
            <h2>Single-Way</h2>
              <p>A set of immutable values are past to the components.</p>
        </article>
          <article className="item">
          <img src="/images/icon4.png" alt="logo4" />
            <h2>JSX</h2>
              <p>Statically-typed, designed to run on modern browsers.</p>
        </article>       
      </section>
      </div>
    );
  }
}

export default App;
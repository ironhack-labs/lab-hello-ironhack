import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="title">
          <h1>Say hello to Reactjs</h1>
          <p>
            {" "}
            You will learn a Frontend framework from scratch, to become a Ninka
            Developer
          </p>
          <button>Awesome!</button>
        </section>
        <section id="container-icons">
          <article className="article">
            <img src="/images/icon1.png" alt="" />
            <h2>Declarative</h2>
            <p>React makes it ainless to create interactive Uls.</p>
          </article>
          <article className="article">
            <img src="/images/icon2.png" alt="" />
            <h2>Components</h2>
            <p>Build encapsulated components that menage their state.</p>
          </article>
          <article className="article">
            <img src="/images/icon3.png" alt="" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </article>
          <article className="article">
            <img src="/images/icon4.png" alt="" />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p>
          </article>
        </section>
      </div>
    );
  }
}

export default App;

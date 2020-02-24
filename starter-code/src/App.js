import React, { Component } from "react";
import "./App.css";

function App() {
    return (
      <div>
        <section className="hero">
          <nav>
              <img src="./images/ironhack-logo.svg" alt="ironhack logo"/>
              <img src="./images/menu-top.svg" alt="menu icon"/>
          </nav>
          <div className="intro-text">
              <h1 className="">Say hello to ReactJS</h1>
              <p>You will learn a frontend framework from scratch, to become a Ninja Developer</p>
              <button>Awesome!</button>
          </div>
        </section>

        <section className="features">
          <article className="item">
            <img src="./images/icon1.png" alt=""/>
            <h3>Declarative</h3>
            <p>React makes it less painless to create interactive UIs.</p>
          </article>
          <article className="item">
            <img src="./images/icon2.png" alt=""/>
            <h3>Components</h3>
            <p>Build encapsulated components that manages their state.</p>
          </article>
          <article className="item">
            <img src="./images/icon3.png" alt=""/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </article>
          <article className="item">
            <img src="./images/icon4.png" alt=""/>
            <h3>JSX</h3>
            <p>Statically-typed designed to run on modern browsers.</p>
          </article>
        </section>
      </div>
    );
}

export default App;
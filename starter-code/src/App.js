import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="background">
          <div class="row">
            <img src="/images/ironhack-logo.svg" class="left" />
            <img src="/images/menu-top.svg" class="right" />
          </div>
          <div class="clearfix" />
          <section class="content">
            <h1>
              Say hello to <br /> ReactJS
            </h1>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to <br />
              become a Developer.
            </p>
          </section>
          <button>Awesome!</button>
        </div>
        <div class="bottomrow">
          <div class="icon">
            <img src="/images/icon1.png" />
            <h6>Declarative</h6>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div class="icon">
            <img src="/images/icon2.png" />
            <h6>Components</h6>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div class="icon">
            <img src="/images/icon3.png" />
            <h6>Single-Way</h6>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div class="icon">
            <img src="/images/icon4.png" />
            <h6>JSX</h6>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

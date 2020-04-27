import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const ironhack = <img src="/images/ironhack-logo.svg" />;
    const react = <img src="/images/react-logo.svg" />;
    const menu = <img src="/images/menu-top.svg" />;
    const title = <h1>Say hello to ReactJS</h1>;
    const subtitle = (
      <p>
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer
      </p>
    );
    const button = <button class="button"> Awesome! </button>;

    const sections = {
      declarative: (
        <div>
          <img src="/images/icon1.png" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs</p>
        </div>
      ),
      components: (
        <div>
          <img src="/images/icon2.png" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state</p>
        </div>
      ),
      singleWay: (
        <div>
          <img src="/images/icon3.png" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the components</p>
        </div>
      ),
      jsx: (
        <div>
          <img src="/images/icon4.png" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      ),
    };

    return (
      <div className="App">
        <section class="blue">
          <div class="nav">
            {ironhack}
            {menu}
          </div>
          <div class="content">
            {title}
            {subtitle}
            {button}
          </div>
        </section>

        <section class="white">
          <div class="card">{sections.declarative}</div>
          <div class="card">{sections.components}</div>
          <div class="card">{sections.singleWay}</div>
          <div class="card">{sections.jsx}</div>
        </section>
      </div>
    );
  }
}

export default App;

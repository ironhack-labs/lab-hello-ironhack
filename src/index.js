import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

ReactDOM.render(
  <div id="content">
    <header>
      <nav>
        <img src="/images/ironhack-logo.svg" alt="Ironhack logo" />
        <img src="/images/menu-top.svg" alt="menu" />
      </nav>
      <div>
        <h1>
          Say hello to <br />
          ReactJS
        </h1>
        <p id="hello">
          You will learn a Frontend <br />
          framework from scratch, to
          <br /> become a Ninja Developer.
        </p>
        <div id="awesome">Awesome!</div>
      </div>
    </header>
    <div id="advantages">
      <div class="advantage-block">
        <img src="/images/icon1.png" alt="Declarative" />
        <div>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
      </div>
      <div class="advantage-block">
        <img src="/images/icon2.png" alt="Components" />
        <div>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
      </div>
      <div class="advantage-block">
        <img src="/images/icon3.png" alt="Single-way" />
        <div>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
      </div>
      <div class="advantage-block">
        <img src="/images/icon4.png" alt="JSX" />
        <div>
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);

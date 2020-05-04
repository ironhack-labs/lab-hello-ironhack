import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const element = (
  <div className="container">
    <div className="firsthalf">
      <header className="headerlogo">
        <img src="./images/ironhack-logo.svg" alt="iron-hack logo" />
        <img src="./images/menu-top.svg" alt="menu-top" />
      </header>

      <section>
        <h1>Say hello to React JS</h1>
        <p>You will learn from scratch to become a Ninka Developer</p>

        <span>Awesome!</span>
      </section>
    </div>

    <div className="valueprop">
      <div>
        <img src="./images/icon1.png" alt="icon-1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src="./images/icon2.png" alt="icon-2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src="./images/icon3.png" alt="icon-3" />
        <h3>Single-Way</h3>
        <p>A set of ummutable values are passed to the components.</p>
      </div>
      <div>
        <img src="./images/icon4.png" alt="icon-4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

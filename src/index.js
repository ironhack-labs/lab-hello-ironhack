import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const myStyle = {
  color: "blue",
};

const element = (
  <div>
    <div className="header">
      <div className="nav-bar">
        <img src="/images/ironhack-logo.svg" alt="Ironhack logo" />
        <img src="/images/menu-top.svg" alt="Hamburger menu" />
      </div>
      <div className="header-message">
        <h1>
          Say hello to
          <br />
          ReactJS
        </h1>
        <p className="tagline">
          You will learn a Frontend
          <br />
          framework from scratch,
          <br /> to become a Ninja Developer
        </p>
        <p>
          <a href="#" className="awesome-btn">
            Awesome!
          </a>
        </p>
      </div>
    </div>
    <div className="features">
      <div className="col-4">
        <img src="/images/icon1.png" alt="Declarative icon" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="col-4">
        <img src="/images/icon2.png" alt="Components icon" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div className="col-4">
        <img src="/images/icon3.png" alt="Single-way icon" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className="col-4">
        <img src="/images/icon4.png" alt="JSX icon" />
        <h3>JSX</h3>
        <p>Statically-typed, desgined to run on modern browsers</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const header = (
  <div className="everything">
    <div className="blockOne">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn a Frontend framework from scratch to become a ninja
        developer.
      </p>
      <button>Awesome!</button>
    </div>
    <div className="blockTwo">
      <div className="one">
        <img src="/images/icon1.png" alt="" />
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="two">
        <img src="/images/icon2.png" alt="" />
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="three">
        <img src="/images/icon3.png" alt="" />
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div className="four">
        <img src="/images/icon4.png" alt="" />
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(header, document.getElementById("heading"));

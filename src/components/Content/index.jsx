import React from "react";
import "./Content.css";

const Content = () => {
  return (
    <div className="boxes">
      <div className="box">
        <img src="/images/icon1.png"></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="box">
        <img src="/images/icon2.png"></img>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="box">
        <img src="/images/icon3.png"></img>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="box">
        <img src="/images/icon4.png"></img>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browers.</p>
      </div>
    </div>
  );
};

export default Content;

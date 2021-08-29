import React from "react";
import "./features.css";
import DeclarativeImg from "../../../public/images/icon1.png";
import ComponentsImg from "../../../public/images/icon2.png";
import SingleImg from "../../../public/images/icon3.png";
import JSXImg from "../../../public/images/icon4.png";

const features = () => (
  <div className="features-container">
    <div className="Declarative">
      <img src={DeclarativeImg}></img>
      <h3>Declarative</h3>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="Components">
      <img src={ComponentsImg}></img>
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className="Single">
      <img src={SingleImg}></img>
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components.</p>
    </div>
    <div className="JSX">
      <img src={JSXImg}></img>
      <h3>JSX</h3>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  </div>
);

export default features;

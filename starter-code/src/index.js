import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js";
import "./index.css";

ReactDOM.render(
  <div className="img-container">
    <Card
      image="images/icon1.png"
      hline="Declarative"
      info="React makes it painless to create interactive UIs."
    ></Card>
    <Card
      image="images/icon2.png"
      hline="Components"
      info="Build encapsulated components that manage their state."
    ></Card>
    <Card
      image="images/icon3.png"
      hline="Single-Way"
      info="A set of immutable values are passed to the component's."
    ></Card>
    <Card
      image="images/icon4.png"
      hline="JSX"
      info="Statically-typed, designed to run on modern browsers."
    ></Card>
  </div>,
  document.getElementById("root")
);

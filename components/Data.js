import React, { Component } from "react";
import Card from "./Card";

export default class Data extends Component {
  render() {
    return (
      <div className="card-container">
        <Card
          cardTitle="Declarative"
          cardBody="React makes it painless to create interactive UIs."
          cardImage="/images/icon1.png"
        />
        <Card
          cardTitle="Components"
          cardBody="Build encapsulated components that manage their state."
          cardImage="/images/icon2.png"
        />
        <Card
          cardTitle="Single-Way"
          cardBody="A set of immutable values are passed to the components."
          cardImage="/images/icon3.png"
        />
        <Card
          cardTitle="JSX"
          cardBody="Statically-typed, designed to run on modern browsers."
          cardImage="/images/icon4.png"
        />
      </div>
    );
  }
}

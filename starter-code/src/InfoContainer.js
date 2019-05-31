import React, { Component } from "react";
import "./App.css";
import IndividualContainer from "./IndividualContainer.js"

class InfoContainer extends Component {
  render () {
    return (
      <div className="infoContainer">
        <IndividualContainer titleText="Declarative" text="React makes it painless to create Interactive UIs." imageSource="icon1.png" />
        <IndividualContainer titleText="Components" text="Build encapsulated components that manage their state." imageSource="icon2.png" />
        <IndividualContainer titleText="Single-Way" text="A set of immutable values are passed to the components." imageSource="icon3.png" />
        <IndividualContainer titleText="JSX" text="Statically-typed, designed to run on modern browsers." imageSource="icon4.png" />
      </div>
    );
  }
}

export default InfoContainer;
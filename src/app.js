import React, { Fragment } from "react";
import Card from "./components/card";
import Presentation from "./components/presentation";
import "./style.css";

const App = () => {
  return (
    <Fragment>
      <Presentation />
      <div className="cards-container">
        <Card
          src="./images/icon1.png"
          alt="Declarative"
          cardTitle="Declarative"
          cardText="React make it painless to create interactive UIs"
        />
        <Card
          src="./images/icon2.png"
          alt="Components"
          cardTitle="Components"
          cardText="Build encapulsated components that manage their state"
        />
        <Card
          src="./images/icon3.png"
          alt="Single-Way"
          cardTitle="Single-Way"
          cardText="A set of immutable values are passed to the components."
        />
        <Card
          src="./images/icon4.png"
          alt="Jsx"
          cardTitle="Jsx"
          cardText="Statically-typed, designed to un on modern broswers."
        />
      </div>
    </Fragment>
  );
};

export default App;

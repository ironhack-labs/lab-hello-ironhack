import React, { Component } from "react";
import "./styles.css";
import Feature from "./Feature";

class AppWhite extends Component {
  render() {
    const features = [
      {
        key: 1,
        icon: './images/icon1.png',
        name: "Declarative",
        description: "React makes it painless to create interactive UIs.",
      },
      {
        key: 2,
        icon: './images/icon2.png',
        name: "Components",
        description: "Build encapsulated components that manage their state.",
      },
      {
        key: 3,
        icon: './images/icon3.png',
        name: "Single-Way",
        description: "A set of immutable values are passed to the component's.",
      },
      {
        key: 4,
        icon: './images/icon4.png',
        name: "JSX",
        description: "Statically-typed, designed to run on modern browsers.",
      },
    ];

    return (
      <div className="AppWhite">
        {features.map(featureProps => {
         return <Feature {...featureProps} />;
        })}
      </div>
    );
  }
}

export default AppWhite;

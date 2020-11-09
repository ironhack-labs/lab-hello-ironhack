import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const featureDiv = (feature) => {
      return (
        <div className="one-feature">
          <img src={feature.img} alt="Image" />
          <h2>{feature.name}</h2>
          <p>{feature.description}</p>
        </div>
      );
    };

    const feature1 = {
      img: "/images/icon1.png",
      name: "Declarative",
      description: "React makes it painless to create interactive UIs",
    };

    const feature2 = {
      img: "/images/icon2.png",
      name: "Components",
      description: "Build encapsulated components that manage their state.",
    };

    const feature3 = {
      img: "/images/icon3.png",
      name: "Single-way",
      description: "A set of immutable values are passed to the component's.",
    };

    const feature4 = {
      img: "/images/icon4.png",
      name: "JSX",
      description: "Statically-typed, designed to run on modern browsers.",
    };

    return (
      <div>
        <header>
          <nav>
            <img src="../images/ironhack-logo.svg" alt="Ironhack-logo" />
            <img src="../images/menu-top.svg" alt="Menu-top" />
          </nav>

          <section>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a super Ninja developer.
            </p>
          </section>
            <a href="#">Awesome</a>
        </header>

        <main>
          {featureDiv(feature1)}
          {featureDiv(feature2)}
          {featureDiv(feature3)}
          {featureDiv(feature4)}
        </main>
      </div>
    );
  }
}

export default App;

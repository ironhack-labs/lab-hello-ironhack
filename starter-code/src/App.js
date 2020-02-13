import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const features = [
      {
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
        imagePath: "/images/icon1.png"
      },
      {
        title: "Components",
        text: "Build encapsulated components that manage their state.",
        imagePath: "/images/icon2.png"
      },
      {
        title: "Single-Way",
        text: "A set of immutable values are passed to the components.",
        imagePath: "/images/icon3.png"
      },
      {
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers.",
        imagePath: "/images/icon4.png"
      }
    ];

    const featureFunc = (feature) => {
      return (
        <article key={feature.title}>
          <img src={feature.imagePath} />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      );
    };

    const header = (
      <header className="header">
        <nav className="nav-bar">
          <div>
            <img src="images/ironhack-logo.svg"/>
          </div>
          <div>
            <img src="images/menu-top.svg"/>
          </div>
        </nav>
        <h1>Say hello to <br/>ReactJS</h1>
        <p>
          You wil learn a Frontend<br/>
          framework from scratch, to<br/>
          become a Ninja Developer.
        </p>
        <a className="link-btn" href="#">Awesome!</a>
      </header>
    );

    const section = (
      <section id="general-info">
        {features.map(featureFunc)}
      </section>
    );

    const container = (
      <div className="container">
        {header}
        {section}
      </div>
    );

    return container;
  }
}

export default App;
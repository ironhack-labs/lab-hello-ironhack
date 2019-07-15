import React, { Component } from "react";
import NavbarReact from "./navbarreact";
import SayHello from "./sayhello";
import "./App.css";
import ReactWidget from "./ReactWidget";

class App extends Component {
  constructor() {
    super();
    this.ReactProperties = [
      {
        imagen: "/images/icon1.png",
        title: "Declarative",
        description: "React make it painless to create interactive UIs."
      },
      {
        imagen: "/images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their state."
      },
      {
        imagen: "/images/icon3.png",
        title: "Single-Way",
        description: "A set of inmutable values are passed to the component's"
      },
      {
        imagen: "/images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
      }
    ];
  }

  render() {
    return (
      <div className="principalsection">
        <section>
          <NavbarReact />
          <SayHello />
        </section>
        <section className="footerbar">
          {this.ReactProperties.map((reactprop, index) => (
            <ReactWidget
              key={index}
              imagen={reactprop.imagen}
              title={reactprop.title}
              description={reactprop.description}
            />
          ))}
        </section>
      </div>
    );
  }
}

export default App;

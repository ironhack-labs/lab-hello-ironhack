import React, { Component } from "react";
import "./App.css";
import Box from "./Box";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.boxs = [
      {
        id: 1,
        image: "images/icon1.png",
        title: "Declarative",
        text: "React makes it painless to create interactive UIs."
      },
      {
        id: 2,
        image: "images/icon2.png",
        title: "Components",
        text: "Build encapsulated components that manages their state."
      },
      {
        id: 3,
        image: "images/icon3.png",
        title: "Single-Way",
        text: "A set of inmutable values are passed to the components."
      },
      {
        id: 4,
        image: "images/icon4.png",
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers."
      }
    ];
  }
  render() {
    return (
      <div id="home">
        <header>
          <nav>
            <img src="images/ironhack-logo.svg" />
            <img src="images/menu-top.svg" />
          </nav>
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <h3>
            You will learn a Frontend <br />
            framework from scratch, to <br />
            become an Ninka Developer
          </h3>
          <button>Awesome!</button>
        </header>
        <section>
          <ul>
            <li>
              {this.boxs.map(box => {
                return <Box
                  key={box.id}
                  image={box.image}
                  title={box.title}
                  text={box.text}
                ></Box>;
              })}
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./App.css";
import "./Components/Button.css";
import "./Components/Box.css";
import Button from "./Components/Button";
import Box from "./Components/Box";

class App extends Component {
  render() {
    const data = [
      {
        img: "/images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs.",
      },
      {
        img: "/images/icon2.png",
        title: "Components",
        description: "Build encapsulated components that manage their safe.",
      },
      {
        img: "/images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's.",
      },
      {
        img: "/images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers.",
      },
    ];

    const boxes = data.map(function (box) {
      return (
        <Box
          img={box.img}
          title={box.title}
          description={box.description}
        ></Box>
      );
    });

    return (
      <div>
        <div className="background">
          <div className="nav">
            <img src="/images/ironhack-logo.svg" alt="ironhack_logo"></img>
            <img src="/images/menu-top.svg" alt="menu"></img>
          </div>
          <div className="landingPage">
            <div className="section title">
              <h1>Say hello to ReactJS</h1>
              <p>
                You will learn how to use the most popular frontend library and
                become a super Ninja developer.
              </p>
              <div>
                <Button></Button>
              </div>
            </div>
            <div className="section">
              <img
                className="img1"
                src="/images/react-logo.svg"
                alt="react_logo"
              ></img>
              <img
                className="img2"
                src="/images/react-logo.svg"
                alt="react_logo"
              ></img>
              <img
                className="img3"
                src="/images/react-logo.svg"
                alt="react_logo"
              ></img>
            </div>
          </div>
        </div>
        <div className="boxes">{boxes}</div>
      </div>
    );
  }
}

export default App;

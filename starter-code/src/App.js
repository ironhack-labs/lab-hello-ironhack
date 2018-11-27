import React, { Component } from "react";
import "./App.css";
import Block from "./Block.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blockA: {
        image: "images/icon1.png",
        title: "Declarative",
        description: "React makes it painless to create interactive UIs."
      },
      blockB: {
        image: "images/icon2.png",
        title: "Components",
        description: "Build incapsulated components that manage their state."
      },
      blockC: {
        image: "images/icon3.png",
        title: "Single-Way",
        description: "A set of immutable values are passed to the component's."
      },
      blockD: {
        image: "images/icon4.png",
        title: "JSX",
        description: "Statically-typed, designed to run on modern browsers."
      }
    };
  }

  render() {
    return (
      <div className="App">
        <div className="back">
          <div className="logo">
            <img src="images/ironhack-logo.svg"
              alt="Ironhack Logo"
            />
            <img src="images/menu-top.svg" alt="menu" />
          </div>
          <div className="sayHello">
            <h1> Say hello to ReactJS </h1>
            <div className="p1">
              <p>
                You will learn a Frontend framework from scratch, to become a
                Ninja Developer.
              </p>
            </div>
            <div>
              <button type="button" className="btn btn-ligth">
                Awesome!
              </button>
            </div>
          </div>
        </div>
        <Block
          image={this.state.blockA.image}
          title={this.state.blockA.title}
          description={this.state.blockA.description}
        />
        <Block
          image={this.state.blockB.image}
          title={this.state.blockB.title}
          description={this.state.blockB.description}
        />
        <Block
          image={this.state.blockC.image}
          title={this.state.blockC.title}
          description={this.state.blockC.description}
        />
        <Block
          image={this.state.blockD.image}
          title={this.state.blockD.title}
          description={this.state.blockD.description}
        />
      </div>
    );
  }
}

export default App;

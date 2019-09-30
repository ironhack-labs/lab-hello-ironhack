import React, { Component } from "react";

import NavBar from "./NavBar"
import Item from "./Item"
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props)


    this.items = [
        {
            image: "images/icon1.png",
            title: "Declarative",
            description: "React makes it painless to create interactive UIs."
        },
        {
            image: "images/icon2.png",
            title: "Components",
            description: "Build encapsulated components that manage their state."
        },
        {
            image: "images/icon3.png",
            title: "Single-Way",
            description: "A set of immutable values are passed to the components."
        },
        {
            image: "  images/icon4.png",
            title: "JSX",
            description: "Statically-typed, designed to run on modern browsers."
        }
       ];
    }
  render() {
    return (
        <div className="App">
          <NavBar></NavBar>
          <div className="items">
          {this.items.map((item, i) => (
            <Item
            key={i}
            image={item.image}
            title={item.title}
            description={item.description}
            ></Item>
                )
            )
          }
          </div>
         
        </div>
    );
  }
}

export default App;
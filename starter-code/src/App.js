import React, { Component } from "react";
import "./App.css";
import Card from "./Card";

class App extends Component {
  render() {
    const cards = [
      {
        image:
          "/images/icon1.png",
        text: "Declarative",
      },
      {
        image:
          "/images/icon2.png",
        text: "Components",
      },
      {
        image:
          "/images/icon3.png",
        text: "Single-way",
      },
      {
        image:
          "/images/icon4.png",
        text: "JSX",
      }
    ];
  
    return (
      <div className="App">
      <h1>Say hello to ReactJS</h1>
      <h2>You will learn a Frontend framework from scratch, to become a Ninka Developer.</h2>
      <div className="grid">{cards.map(card => <Card {...card} />)}</div>
      </div>
    );
  }
}

  export default App;
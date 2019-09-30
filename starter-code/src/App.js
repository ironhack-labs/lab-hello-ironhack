import React, { Component } from "react";
import "./App.css";
import Presentation from "./presentation";
import Info from "./info";



class App extends Component {
  constructor() {
    super()
    this.info = [
        {
          img: "/images/icon1.png", title: "Declarative", text: "React makes it painless to create interactive UIs"
        },
        {
          img: "/images/icon2.png", title: "Components", text: "Build encapsulated components that manage their state"
        },
        {
          img: "/images/icon3.png", title: "Single-Way", text: "A set of immutable values are passed to the components"
        },
        {
          img: "/images/icon4.png", title: "JSX", text: "Statically-typed. Designed to run on modern browsers"
        }
      
    ]
  }
  render() {
    return (
      <div className="App">
        <Presentation></Presentation>
        <div id="info-container">
        {this.info.map(infoData => (
          <Info
            img = {infoData.img}
            title = {infoData.title}
            text = {infoData.text}
          ></Info>
        ))}
        </div>

      </div>
    );
  }
}

export default App;
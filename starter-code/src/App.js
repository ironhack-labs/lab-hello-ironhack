import React, { Component } from "react";
import "./App.css";
import Item from "./Item.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <nav className="navbar">
            <img src="../images/ironhack-logo.svg" />
            <img src="../images/menu-top.svg" />
          </nav>
          <h1> Say hello to ReactJS </h1>
          <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
          <a href="#">Awesome!</a>
        </div>
        <div className="bottom">
          <Item imgUrl="../images/icon1.png" title="Declarative" description="React makes it painless to create interactive UIs"/>
          <Item imgUrl="../images/icon2.png" title="Components" description="Build encapsulated components that manage their state."/>
          <Item imgUrl="../images/icon3.png" title="Single-Way" description="A set of inmutable values are passed to the component's"/>
          <Item imgUrl="../images/icon4.png" title="JSX" description="Staticaly-typed, designed to run on modern browsers."/>
        </div>
      </div>
    );
  }
}

export default App;
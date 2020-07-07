import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card.js";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg">
          <div className="images">
            <img src="/images/ironhack-logo.svg"></img>
            <img src="/images/menu-top.svg"></img>
          </div>
          <div className="title">
            <h1> Say hello to ReactJS </h1>
            <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
          </div>
          <button className="btn btn-light" id="btn">Awesome!</button>
        </div>
        <div className="Bottom">
          <ul className="list">
            <Card pic="/images/icon1.png" title="Declarative" text="Some text"/>
            <Card pic="/images/icon2.png" title="Components" text="Some text"/>
            <Card pic="/images/icon3.png" title="Single-way" text="Some text"/>
            <Card pic="/images/icon4.png" title="JSX" text="Some text"/>
          </ul>
        </div>
      </div>
    );
  }
}
 
export default App;
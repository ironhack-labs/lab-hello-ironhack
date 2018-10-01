import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div id="body">
        <div id="top">
          <div id="header">
          <div id="logo">
            <img src="./images/ironhack-logo.svg"></img>
          </div>
          <div id="menutop">
            <img src="./images/menu-top.svg"></img>
          </div>
        </div>
        </div>
        <div id="middle">
        <div id="helloworld">
        <h1>Say Hello to ReactJS</h1>
        </div>
        <p>You will learn a Fronted framework from scratch, to becaome an Ninka Developer</p>
        <button>Awesome!</button>
        </div>
        <div id="bottom">
          <div classname="icon">
          <img src="./images/icon1.png"></img>
          <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div classname="icon">
          <img src="./images/icon2.png"></img>
          <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
        </div>
        <div classname="icon">
          <img src="./images/icon3.png"></img>
          <h2>Sigle-way</h2>
            <p>A set of inmutable values are passed to the component's.</p>
        </div>
        <div classname="icon">
          <img src="./images/icon4.png"></img>
          <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers. </p>
        </div>
      </div>
      </div>
    );
  }
}





{/* <div className="App">
<h1> Say Hello to ReactJS </h1>
<h3> You will learn a Fronted framework from scratch, to becaome an Ninka Developer.</h3>
</div> */}
import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div id="body">
        <div id="top">
          {/* div superior */}
          <div id="logo">
            <img src="./images/ironhack-logo.svg"></img>
          </div>
          <div id="menutop">
            <img src="./images/menu-top.svg"></img>
          </div>
        </div>
        <div id="middle">
        <div id="helloworld">
        Say Hello to ReactJS
        </div>
        <h4>You will learn a Fronted framework from scratch, to becaome an Ninka Developer</h4>
        <button>Awesome!</button>
        </div>
        <div id="bottom">
          {/* div inferior */}
          <div classname="icon">
          <img src="./images/icon1.png"></img>
          <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
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
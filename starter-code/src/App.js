import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div id="body">
     <div id="topdiv">
      <div id="header">
        <div id="ironhacklogo">
        <img src="./images/ironhack-logo.svg"></img>
        </div>
        <div id="menutop">
        <img src="./images/menu-top.svg"></img>
        </div>
      </div>
      <div id="middlesection">
        <div id="sayhello">
        Say hello to ReactJS
        </div>
        <h4>You will learn a Frontend framework from scratch, to become a Ninja Developer</h4>
        <button>Awesome!</button>
      </div>
     </div>
     <div id="bottomdiv">
     <div className="icon">
     <img src="./images/icon1.png"></img>
     <h2>Declarative</h2>
     <p>React makes it painless to create interactive UIs.</p>
     </div>
     <div className="icon">
     <img src="./images/icon2.png"></img>
     <h2>Components</h2>
     <p>Build encapsulated components that manage their state.</p>
     </div>
     <div className="icon">
     <img src="./images/icon3.png"></img>
     <h2>Single-Way</h2>
     <p>A set of immutable values are passed to the component's</p>
     </div>
     <div className="icon">
     <img src="./images/icon4.png"></img>
     <h2>JSX</h2>
     <p>Statically-typed, designed to run on modern browsers.</p>
     </div>
     
     </div>
      
    </div>
    );
  }
}


export default App;
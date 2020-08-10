import React, { Component } from "react";
import "./App.css";
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="blue-container">
            <nav id="navbar">
                <img src='images/ironhack-logo.svg'/>
                <img src='images/menu-top.svg'/>
            </nav>
            <div id="message-container">
                <h1 id="title" >Say hello to ReactJS</h1>
                <p id="message" >You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                <button id="awesome-button">Awesome!</button>
            </div>
        </div>
        <div id="concept-container">
            <div>
                <img src="images/icon1.png"/>
                <h3>Declarative</h3>
                <p>React makes it painless to create interactive UIs</p>
            </div>
            <div>
                <img src="images/icon2.png"/>
                <h3>Components</h3>
                <p>Build encapulsated components that manage their state</p>
            </div>
            <div>
                <img src="images/icon3.png"/>
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div>
                <img src="images/icon4.png"/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to un on modern broswers.</p>
            </div>
        </div>
      </div>
    );
  }
}
 

 
export default App;
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
            <img src="./images/ironhack-logo.svg"></img>
            <img src="./images/menu-top.svg"></img>
        </div>
        <div className="body">
            <div className="text">
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn a Frontend framework from Scratch, to become a Ninka Developer.</h3>
                <a>Awesome!</a>
            </div>
            <div className="images">
                <img className="reactimg" src="./images/react-logo.svg"></img>
            </div>
        </div>
        <div className="cols">
            <div>
                <img src="./images/icon1.png"></img>
                <h4>Declarative</h4>
                <p  className="coltext">React makes painless to create interactive UIs</p>
            </div>
            <div>
                <img src="./images/icon2.png"></img>
                <h4>Components</h4>
                <p  className="coltext">Build encapsulated that manage their state</p>
            </div>
            <div>
                <img src="./images/icon3.png"></img>
                <h4>Single-Way</h4>
                <p className="coltext">A set of immutable values are passed to the component's</p>
            </div>
            <div>
                <img src="./images/icon4.png"></img>
                <h4>JSX</h4>
                <p className="coltext">Statically-typed. Designed to run in modern browsers</p>
            </div>
        </div>
       
      </div>
    );
  }
}

export default App;

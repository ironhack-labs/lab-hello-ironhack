import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <img src="images/ironhack-logo.svg" />
          <img src="images/menu-top.svg" />
        </div>
        <div className="title">
            <h1>Say hello to ReactJS </h1>
            <h3> You will learn a Frontend framework from scratch, to become an Ninja Developer</h3>
        </div>
        <div className="fake-btn"> 
          <span>Awesome!</span>
        </div>
      </div>
    );
  }
}

export default App;
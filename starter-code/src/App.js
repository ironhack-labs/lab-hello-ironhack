import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="header">
          <div className="section" id="logo">
            <img src="/images/ironhack-logo.svg"></img>
          </div>
          <div className="section" id="title">
            <h1>Say hello to React JS</h1>
            <h2>You will learn a Frontend framework from scratch, to become a Ninja Developer</h2>
          </div>
          <div className="section" >
            <button className="btn" id="button">Awesome!</button>
          </div>
        </div>

        <div className="body1">
          <div className="mycard">
            <img src="/images/icon1.png"></img>
          </div>
          <div className="mycard">
            <img src="/images/icon2.png"></img>
          </div>
          <div className="mycard">
            <img src="/images/icon3.png"></img>
          </div>
          <div className="mycard">
            <img src="/images/icon4.png"></img>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
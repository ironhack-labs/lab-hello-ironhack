import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      //world of html
      <div className="App">
        <div className="background">
          <div className="navbar">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </div>
          <div className="header">
            <h1>
              Say Hello to
              <br /> ReactJS
            </h1>
            <p>You will learn a Frontend Framework from scratch </p>
          </div>
        </div>
        <div className="content">
          <div className="box">
            <img src="/images/icon1.png" />
            <h3>DECLARATIVE </h3>
          </div>
          <div className="box">
            <img src="/images/icon2.png" />
            <h3>COMPONENTS </h3>
          </div>
          <div className="box">
            <img src="/images/icon3.png" />
            <h3>SINGLE-WAY </h3>
          </div>
          <div className="box">
            <img src="/images/icon4.png" />
            <h3>JSX</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

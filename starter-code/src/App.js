import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="viewPort">
      <div className="header">
          <img src="./images/ironhack-logo.svg" />
          <img src="./images/menu-top.svg" />
        </div>
        <div className="sectionOne">
          <div className="welcomeText">
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch, to become an
              Ninka Developer.
            </p>
          </div>
          <div className="callAction">
            <a href="#">Awesome!</a>
          </div>
        </div>
      </div>
        
        <div className="sectionTwo">
          <div class="row">
            <div class="col-4">
              <img src="./images/icon1.png" alt="" />
              <h2>Declarative</h2>
              <p>React makes it painless to create interactive UIs</p>
            </div>
            <div class="col-4">
              <img src="./images/icon2.png" alt="" />
              <h2>Components</h2>
              <p>Build encapsulated components that manage their state.</p>
            </div>
            <div class="col-4">
              <img src="./images/icon3.png" alt="" />
              <h2>Single-Way</h2>
              <p>A set of immutable values are passed to the component's</p>
            </div>
            <div class="col-4">
              <img src="./images/icon4.png" alt="" />
              <h2>JSX</h2>
              <p>Statucally-typed designed to run on modern browsers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

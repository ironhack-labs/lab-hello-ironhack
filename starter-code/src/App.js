import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="header">    
          <div className="section" id="logo">
            <img src="/images/ironhack-logo.svg" />
          </div>
          <div className="section" id="title">
            <h1>Say hello to ReactJS</h1>
            <h2>
              You will learn a Frontend framework from the scratch to become a
              Ninja Developer
            </h2>
          </div>
          <button class="section button" type="button">
            Awesome
          </button>
        </div>
        <div className="body1 container-fluid d-flex flex-row justify-content-around">
          <div className="card">
            <img src="/images/icon1.png" />
          </div>
          <div className="card">
            <img src="/images/icon2.png" />
          </div>
          <div className="card">
            <img src="/images/icon3.png" />
          </div>
          <div className="card">
            <img src="/images/icon4.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

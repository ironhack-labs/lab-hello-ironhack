import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const navigation = (
      <div className="navbar">
        <img className="logo" src="/images/ironhack-logo.svg"></img>
        <img
          className="logo"
          src="/images/menu-top.svg"
          height="40"
          width="40"
        />
      </div>
    );

    const main = (
      <div className="content-wrapper">
        <div className="content">
          <h1>Say hello to ReactJS</h1>
          <h2>
            You will learn a Frondend framework from scratch, to become a Ninka
            Developer
          </h2>
          <button className="button">Awesome!</button>
        </div>
      </div>
    );

    const info = (
      <div className="info-area">
        <div className="box">
          <img src="/images/icon1.png" height="150" width="150" />
          <h3>Declarative</h3>
          <div className="box-text">
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className="box">
          <img src="/images/icon2.png" height="150" width="150" />
          <h3>Components</h3>
          <div className="box-text">
            <p>Build encapsulated components that manager their state.</p>
          </div>
        </div>
        <div className="box">
          <img src="/images/icon3.png" height="150" width="150" />
          <h3>Single-Way</h3>
          <div className="box-text">
            <p>A set of imutable values are passed to the component's.</p>
          </div>
        </div>
        <div className="box">
          <img src="/images/icon4.png" height="150" width="150" />
          <h3>JSX</h3>
          <div className="box-text">
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );

    return (
      <div className="App">
        {navigation}
        {main}
        {info}
      </div>
    );
  }
}

export default App;

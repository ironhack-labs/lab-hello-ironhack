import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render(){
    return (
      <div className="main">
      <div className="top">
        <div className="top__imgs">
          <img src="/images/ironhack-logo.svg" alt=""/>
          <img src="/images/menu-top.svg" alt=""/>
        </div>
        <div className="top__content">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become an Ninja Developer</p>
        <button className="top__btn">Awesome!</button>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="/images/icon1.png" alt="icon1"/>
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div className="icons">
          <img src="/images/icon2.png" alt=""/>
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>

        <div className="icons">
          <img src="/images/icon3.png" alt=""/>
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="icons">
          <img src="/images/icon4.png" alt=""/>
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers.</p>
        </div>
      </div>
      </div>
      

    )
  }
}

export default App;
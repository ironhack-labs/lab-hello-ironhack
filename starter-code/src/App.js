import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
    <div className="App">
        <div className="navbar">
            <div className="navbar-content grid flex">
                <img src="images/ironhack-logo.svg" alt="" className="logo" />
                <a href="" className="menu"><img src="images/menu-top.svg" alt="" className="logo" /></a>
            </div>
        </div>
        <div className="module first flex">
            <div className="module-content grid">
                <div className="first-title">
                    <h1>Say hello to ReactJS</h1>
                    <h2>You will learn a Frontend library from scratch, to become a Ninja developer ;)</h2>
                    <a href="" className="btn">Awesome!</a>
                </div>
            </div>
        </div>
        <div className="module flex">
            <div className="flex grid">
                <div className="article">
                    <img src="images/icon1.png" alt="" height="140"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="article">
                    <img src="images/icon2.png" alt="" height="140"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="article">
                    <img src="images/icon3.png" alt="" height="140"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
                <div className="article">
                    <img src="images/icon4.png" alt="" height="140"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
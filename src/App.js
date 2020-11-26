import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    let logo = "../images/ironhack-logo.svg";
    let menu = "../images/menu-top.svg";
    let reactLogo = "../images/react-logo.svg";
    let icon1 = "../images/icon1.png", icon2 = "../images/icon2.png", icon3 = "../images/icon3.png", icon4 = "../images/icon4.png";
    return (
      <div>
        <div className="s1">
            <header>
              <img src={logo}></img>
              <img src={menu}></img>
            </header>
            <div className="c1">
              <div>
                <h1> Say hello to <br/>ReactJS</h1>
                <p>You will learn how to use<br/> the most popular frontend library,<br/>
                and become a super Ninja developer</p>
                <button>Awesome!</button>
              </div>
              <img src={reactLogo}></img>
            </div>
            
        </div>
        <div className="s2">
          <div className="c2">
            <img src={icon1}></img>
            <h2>Declarative</h2>
            <p>React makes it<br/> painless to create<br/> interactive UIs.</p>
          </div>
          <div className="c2">
            <img src={icon2}></img>
            <h2>Components</h2>
            <p>Build encapsulated<br/> components that<br/> manage their state.</p>
          </div>
          <div className="c2">
            <img src={icon3}></img>
            <h2>Single-Way</h2>
            <p>A set of immutable<br/> values are passed to<br/> the component's</p>
          </div>
          <div className="c2">
            <img src={icon4}></img>
            <h2>JSX</h2>
            <p>Statically-typed.<br/> Designed to run on<br/> modern browsers.</p>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

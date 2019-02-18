import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App container">
          <div className="nav">
            <nav>
              <img src="/images/ironhack-logo.svg" />
              <img src="/images/menu-top.svg" />
            </nav>
          </div>
          <div className="hero">
            <div className="wrapper">
              <h1>Say hello to ReactJS</h1>
              <p className="herop">
                You will learn a frontend <br />
                <br />
                framework from scratch, to
                <br />
                <br /> become a Ninja Developer
              </p>
              <button>Awesome!</button>
            </div>
            <div className="logo-react">
              <img className="big" src="/images/react-logo.svg" />
              <img className="medium" src="/images/react-logo.svg" />
              <img className="small" src="/images/react-logo.svg" />
            </div>
          </div>
        </div>
        <div className="icon">
          <div className="icom-img">
            <img src="/images/icon1.png" />
            <h5>Declarative</h5>
            <p>React makes it painless to create interactives UIs.</p>
          </div>
          <div className="icom-img">
            <img src="/images/icon2.png" />
            <h5>Component</h5>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="icom-img">
            <img src="/images/icon3.png" />
            <h5>Single-Way</h5>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="icom-img">
            <img src="/images/icon4.png" />
            <h5>JSX</h5>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

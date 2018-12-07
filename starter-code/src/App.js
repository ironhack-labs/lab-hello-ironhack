import React, { Component } from "react";
import "./App.css";
import Icons from "./components/icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="backg">
          <div className="Nav">
            <img src="/images/ironhack-logo.svg" />
            <img src="/images/menu-top.svg" />
          </div>
          <h1>
            Say hello to
            <br />
            ReactJS
          </h1>

          <h4>
            You will learn a Frontend
            <br />
            framework from scratch, to
            <br />
            become a Ninja Developer.
          </h4>
        </div>
        <div className="icons">
          <Icons />
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <container className="App container">
        <h1 class="font-weight-bolder">
          Say hello to <br />
          ReactJS
        </h1>
        <text>
          You will learn a Frontend framework from scratch, to become a ninja
          developer.
        </text>
        <br />
        <br />
        <button>Awesome!</button>
      </container>
    );
  }
}

export default App;

import React, { Component } from "react";
import Hello from './Hello';
import Items from './Items';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        <Items />
      </div>
    );
  }
}

export default App;

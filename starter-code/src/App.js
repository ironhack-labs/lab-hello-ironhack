import React, { Component } from "react";
import TopUI from "./Top-UI.js";
import BottomUI from "./Bottom-UI.js";
import "./App.css";

class App extends Component {
  render() {

    return (
      <div>  
        <TopUI></TopUI>
        <BottomUI></BottomUI>
        <div className="App">
      </div>
      </div>
    );
  }
}

export default App;
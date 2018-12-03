import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main/Main"
import Features from "./components/Features/Features";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Main></Main>        
      <Features></Features>
      </div>
    );
  }
}

export default App;
import React, { Component } from "react";
import Undericons from "./Undericons.jsx";
import Main from "./Main.jsx";
import Navbar from "./Navbar.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main></Main>
        <Undericons />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";

import Header from "./Header";
import TextImg from "./TextImg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header image="./images/ironhack-logo.svg" imageTitle="IronHack" />
        <TextImg />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import "./app.css";
import Header from "./components/Header";
import Data from "./components/Data";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Data />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Header from './Header';
import Attributes from "./Attributes";

class App extends Component {
  render() {
    return (
      <div >
        <Header />
        <Attributes />
      </div>
    );
  }
}

export default App;
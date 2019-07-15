import React, { Component } from "react";
import NavbarReact from "./navbarreact";
import SayHello from "./sayhello";
import "./App.css";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="principalsection">
        <NavbarReact />
        <SayHello />
      </div>
    );
  }
}

export default App;

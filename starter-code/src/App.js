import React, { Component } from "react";
import "./App.css";
import MainCointainer from "./MainContainer";
import InfoContainer from "./InfoContainer";

class App extends Component {
  render() {
    return (
      <div>
        <MainCointainer/>
        <InfoContainer/>
      </div>
    );
  }
}

export default App;
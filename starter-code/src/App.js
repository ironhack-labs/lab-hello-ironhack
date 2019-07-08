import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Title from "./Components/Title";
import Button from "./Components/Button";
import Infos from "./Components/Infos";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Global">
        <div className="App">
            <NavBar />
            <Title />
            <Button />
        </div>
        <Infos/>
      </div>
    );
  }
}

export default App;
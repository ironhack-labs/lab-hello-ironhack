import React, { Component } from "react";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import FourElements from "./FourElements/FourElements";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Main></Main>
        <FourElements></FourElements>
      </div>
    );
  }
}

export default App;

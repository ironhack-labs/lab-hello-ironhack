import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroCopy from "./components/HeroCopy";
import Cards from "./components/Cards.jsx";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='hero'>
          <NavBar />
          <HeroCopy />
        </div>
        <Cards />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Heading from "./Heading"
import Main from "./Main"
import Cards from "./Cards"
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <Cards />
      </div>
    );
  }
}



export default App;
import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar/navBar.jsx"
import Header from "./components/header/header.jsx"
import Section from "./components/section/section.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
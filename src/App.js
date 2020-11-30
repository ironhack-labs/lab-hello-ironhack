import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Description from "./components/Description";
import Button from "./components/Button";
import Section from "./components/Section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <Navbar />
          <Header />
          <Description />
          <Button />
        </div>
        <Section />
      </div>
    );
  }
}

export default App;

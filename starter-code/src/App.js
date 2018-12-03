import React, { Component } from "react";

import "./App.css";
import Navbar from "./Navbar.js";
import Title from "./Title.js";
import Button from "./Button.js";
import Articles from "./Articles.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Navbar />
          <div className="text-nav">
            <Title/>
            <Button />
          </div>
        </div>
        <div className="articles-section">
          <Articles />
        </div>
      </div>
    );
  }
}

export default App;

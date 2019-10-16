import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js"
import TopMenu from "./TopMenu.js"
import BottomMenu from "./BottomMenu.js"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topMenu-container">
          < TopMenu />
        </div>
        <div className="header-container">
          < Header />
        </div>
        <div className="bottomMenu-container">
          < BottomMenu />
        </div>
      </div>
    );
  }
}

export default App;
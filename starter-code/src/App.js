

import React, { Component } from "react";
import "./App.css";
import MyButton from "./Button.js"


class App extends Component {

  render() {
    return (
      <div>
      <nav className="nav">
        <img src="/images/ironhack-logo.svg"></img>
        <img src="/images/menu-top.svg"></img>
      </nav>
      <div className="App">
        <h1>Say hello to<br></br>ReactJS</h1>
        <p>You will learn Frontend<br></br>framework from scratch,<br></br>to become a Ninka Developer.</p>
        <MyButton/>
      </div>
      </div>
    );
  }
}

export default App;
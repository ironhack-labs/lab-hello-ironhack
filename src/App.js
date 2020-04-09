/*example
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}

export default App;*/

import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    )
  }
}


export default App;

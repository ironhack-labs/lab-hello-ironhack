import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Boxes from './components/Boxes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Boxes></Boxes>
      </div>
    );
  }
}

export default App;

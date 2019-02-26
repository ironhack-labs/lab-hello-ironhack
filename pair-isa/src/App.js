import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Cover from './components/Cover'
import Cards from "./components/InfoCard";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Cover />
        <Cards />
      </div>
    );
  }
}

export default App;

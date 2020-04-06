import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Section></Section>
      </div>
    );
  }
}

export default App;

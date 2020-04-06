import React, { Component } from 'react';
import Header from './components/header';
import Title from './components/title';
import './main.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Title />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Cards from './components/Cards.jsx'


class App extends Component {
  render() {
    return (
      <div className="dark__bg">


        <Header></Header>

        <div className="light__bg">
          <Cards></Cards>
        </div></div>
    );
  }
}

export default App;
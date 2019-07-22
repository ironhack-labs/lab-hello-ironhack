import React, { Component } from 'react';
import './App.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Main from '../components/Main';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
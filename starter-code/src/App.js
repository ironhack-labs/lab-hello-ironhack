import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';


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
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './Icons';

class App extends Component {
  render() {
    const topDiv = 
    (
    <header className="App-header">
    <nav> 
      <img src='images/ironhack-logo.svg' alt="logo" />
      <img src='images/menu-top.svg' alt="logo" />
    </nav>
    <br/><br/><br/>
    <div className="topText">
        <h1>Say hello to <br/>ReactJS</h1>
      <span className="mainText">
        You will learn Frontend <br/>
        framework from scratch, to <br/>
        become an Ninka Developer.
      </span>
      <br/><br/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Awesome!
      </a>
    </div>
    </header>
    )
    
    return (
      <div className="App">
        {topDiv}
        <Icons />
      </div>
    );
  }
}

export default App;

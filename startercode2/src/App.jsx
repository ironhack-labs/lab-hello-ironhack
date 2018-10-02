import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="content">
          <img src='images/ironhack-logo.svg' alt="ironhack logo" />
          <img src="images/menu-top.svg" alt="menu bars"/>
          <img src="images/react-logo.svg" id="react-logo" alt="react logo"/>
          <div id="title">
            <h1>Say Hello to ReactJS</h1>
          </div>
          <div id="subtitle">
            <p>You will learn a front end framework from scratch to become a ninja front end developer</p>
          </div>
          <button>Awesome!</button>
      </div>
      </div>
    );
  }
}

export default App;

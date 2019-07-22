import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Nav">
          <img className="logo" src="./images/ironhack-logo.svg" />
          <img className="logo2" src="/images/menu-top.svg" />
        </div>
        <div className="container">
          <h1 className="h1"> Say hello to RectJS </h1>
          <p className="p">
            You will learn a Frontend framework from scratch, to becaome an
            Ninka Developer.
          </p>
          <button className="btn">Awesome!</button>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../public/App.css"
import Nav from './Nav.js';

class App extends React.Component {
  render() {
    return (
      <div className="App1">
        <Nav />
        <div className="mainText">
          <div>
            <a className="Tittle"> Say Hello to ReactJS </a>
          </div>
          <div className="textDescript">
            <p>You will learn a Frontend framework from scratch, to becaome an Ninka Developer.</p>
          </div>
        </div>
        <div className="awesomeBtn">
          <a>Awesome!</a>
        </div>
      </div>
    )
  }
}

export default App;
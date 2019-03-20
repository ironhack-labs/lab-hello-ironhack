import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  state = {  }
  render() {
    return (
      <div className="App">
        <div class="first-block">
          <img src="../images/ironhack-logo.svg"></img>
          <h1> Say hello to ReactsJS </h1>
          <h2> <span>You will learn a Frontend framework from scratch, to become a Ninja Developper</h2>
          <button className="button">Awesome!</button>
        </div>
      </div>
    );
  }
}

export default App;




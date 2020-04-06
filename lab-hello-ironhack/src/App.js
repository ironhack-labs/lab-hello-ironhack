import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="header-homepage">
          <nav>
            <img src="../images/ironhack-logo.svg" alt=""/>
            <img src="../images/menu-top.svg" alt=""/>
          </nav>
          <div>
            <h1>Say hello to <br/>ReactJs</h1>
            <p>You will learn a Frontend <br/>framework from scratch, to <br/>become a Ninja Developer.</p>
          </div>
          <button>Awesome!</button>
        </header>
      </div>
    );
  }
}

export default App;

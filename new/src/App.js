import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav">
            <img src="/images/ironhack-logo.svg" className="App-logo" alt="logo" />
            <img src="/images/menu-top.svg" alt="menu" />
          </nav>
        <header>
          <div className="App-header">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend framework from scratch to become a Ninja Developer.</p>
          <button>Awesome!</button>
          </div>
        </header>
        <section>
          <div className="cards">
            <img src="/images/icon1.png" alt="Declarative"></img>
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="cards">
            <img src="/images/icon2.png" alt="Declarative"></img>
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="cards">
            <img src="/images/icon3.png" alt="Declarative"></img>
            <h4>Single-Way</h4>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div className="cards">
            <img src="/images/icon4.png" alt="Declarative"></img>
            <h4>JSX</h4>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

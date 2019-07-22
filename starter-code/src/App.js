import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    const navbar = (
      <nav className="navbar">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" width="24px"/>
      </nav>
    );

    const text = (
      <div className="hero-text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
      </div>
    )

    const btn = (
      <button type="button" className="hero-btn">Awesome!</button>
    )

    const content = (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <img src="/images/icon1.png" alt="declarative image" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src="/images/icon2.png" alt="component image" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src="/images/icon3.png" alt="single-way image" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <img src="/images/icon4.png" alt="JSX image" />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    )
 
    return (
      <div className="App">
        <div className="hero">
        {navbar}
        {text}
        {btn}
        </div>
        <section className="intro">
          {content}
        </section>
      </div>
    );
  }
}

export default App;

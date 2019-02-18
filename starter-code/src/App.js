/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <img src="/images/ironhack-logo.svg" />
          <img src="/images/menu-top.svg" />
        </nav>
        <section className = 'sectionone'>
        <div className = 'divone'>
        <h1>Say hello to ReactJS</h1>
        <p className ='textsectionone'>You will learn a Frontend framework from scratch, to became an Ninka Developer.</p>
        <button>Awesome!</button>
        </div>
        <div className = 'divtwo'></div>
        </section>
        <section className = 'sectiontwo'>
        <div className = 'divsectiontwo'>
        <img src="/images/icon1.png"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className = 'divsectiontwo'>
        <img src="/images/icon2.png"/>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className = 'divsectiontwo'>
        <img src="/images/icon3.png"/>
        <h3>Single-Way</h3>
        <p>A set if immutable values are passed to the component's</p>
        </div>
        <div className = 'divsectiontwo'>
        <img src="/images/icon4.png"/>
        <h3>JSX</h3>
        <p>Statically to run on modern brosers.</p>
        </div>
        </section>
      </div>
    );
  }
}

export default App;

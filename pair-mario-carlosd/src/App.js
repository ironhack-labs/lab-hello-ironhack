import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <header className="App-header">
        <section class= "row">
          <div class ="column2 card2">
            <h1 class = "yolo" >Say hello to ReactJS</h1>
            <p class = "yolo1" >You will lern a Fronted framework from scrach, to become an Nika Developer</p>
          </div>
          <div class ="column card">
            <img src="/images/react-logo.svg" className="App-logo" alt="logo" />
          </div>
        </section>
         
          <button class= "buttom" > <h2>Awsome!</h2></button>
        </header>
        <section class= "row">
          <div class ="column card">
            <img src="/images/icon1.png" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactiv UIs.</p>
          </div>
          <div class ="column card">
            <img src="/images/icon2.png" />
            <h2>Components</h2>
            <p>Build encapsuled components that manage their state.</p>
          </div>
          <div class ="column card">
            <img src="/images/icon3.png" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div class ="column card">
            <img src="/images/icon4.png" />
            <h2>JSX</h2>
            <p>Statically-typed desinged to run on modern browser.</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

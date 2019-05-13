import React from 'react';
import logo from './logo.svg';
import ironhackLogo from './ironhack-logo.svg';
import menuTop from './menu-top.svg'
import reactLogo from './react-logo.svg'
import './App.css';


function App() {
  return (
    <div className="App">
    <nav>
      <div className = "logo">
      <img src ={ironhackLogo}></img>
      </div>
      <div className = "menu">
      <img src = {menuTop}></img>
      </div>
    </nav>
    <header class = "App-header">
      <h1>Say hello to ReactJS</h1>
      <p>You will learn a Frontend framework from scratch, 
        to become a Ninka Developer</p>
        <button href="#" class="button">
          Awesome!
        </button>
        <img src = {reactLogo}></img>
        </header>
      <body>
        <div className = "cards">
        <div className = "single">
        <img src = "./images/icon1.png"></img>
        <h4>Declarative </h4>
          <p>React makes it painless to create interactive UIs.
        </p>
        </div>
        <div className = "single">
        <img src = "./images/icon2.png"></img>
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className = "single">
        <img src = "./images/icon3.png"></img>
        <h4>Single-Way</h4>
        <p>A set of immutabe values are passed to the component's.</p>
        </div>
        <div className = "single">
        <img src = "./images/icon4.png"></img>
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        </div>
        </body>
    </div>
  );
}

export default App;

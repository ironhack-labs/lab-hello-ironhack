import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

const nav = (
  <nav className="nav-bar">
    <a href="#">
      <img src="images/ironhack-logo.svg" alt="test" />
    </a>
    <a href="#">
      <img src="images/menu-top.svg" alt="Menu" />
    </a>
  </nav>
);

const hero = (
  <div className="hero-container">
    <div className="hero">
      <h1 className="title">Say hello to ReactJS</h1>
      <p className="description">
        You will learn a Frontend framework from scratch, to become a Ninka
        Developer.
      </p>
      <button type="submit" className="btn-white">
        Awesome!
      </button>
    </div>
  </div>
);

const infoSection = (
  <div className="info-section">
    <div className="cards">
      <div className="card">
        <img src="images/icon1.png" alt="Declarative" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interative UIs</p>
      </div>
      <div className="card">
        <img src="images/icon2.png" alt="Components" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="card">
        <img src="images/icon3.png" alt="Single-way" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className="card">
        <img src="images/icon4.png" alt="JSX" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);
const main = (
  <div className="main-container">
    {nav}
    {hero}
    {infoSection}
  </div>
);

// ReactDOM.render(nav, document.querySelector('#root'));
ReactDOM.render(main, document.querySelector('#root'));

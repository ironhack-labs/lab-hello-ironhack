import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element = (
  <div>
    <div class="top-half">
      <div class="top-bar">
        <img src="./images/ironhack-logo.svg" alt="ironhack" />
        <img src="./images/menu-top.svg" alt="menu img" />
      </div>

      <div class="info-and-background">
        <div class="top-info">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn now to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>

        <img class='react-logo'src="./images/react-logo.svg" alt="react" />
      </div>
    </div>

    <div class="bottom-half">
      <div class="feature-container">
        <img src="./images/icon1.png" alt="" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div class="feature-container">
        <img src="./images/icon2.png" alt="" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </div>
      <div class="feature-container">
        <img src="./images/icon3.png" alt="" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div class="feature-container">
        <img src="./images/icon4.png" alt="" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));

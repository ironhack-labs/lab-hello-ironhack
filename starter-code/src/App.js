import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class='navbar'>
        <img src='images/ironhack-logo.svg' alt='ironhacklogo' />
        <img src='images/menu-top.svg' alt='menu'/>
      </nav>
      <header className="App-header">
      <h1>Say hello to ReactJS</h1>
        <p class='info'>
          You will learn a Frontend framework from scratch, to become a Ninja Developer.
        </p>
        <button class='button'> Awesome!</button>
      </header>
      <div class='images'>
      <article>
        <img src='images/icon1.png' alt='img1'></img>
        <h4> Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
      </article>
      <article>
        <img src='images/icon2.png' alt='img2'></img>
        <h4> Components</h4>
        <p>Build encapsulated components that manage their state.</p>
      </article>
      <article>
        <img src='images/icon3.png' alt='img3'></img>
        <h4> Single-Way</h4>
        <p>A set of immutable values are passed to the component's.</p>
      </article>
      <article>
        <img src='images/icon4.png' alt='img4'></img>
        <h4>JSX</h4>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </article>
      </div>
    </div>
  );
}

export default App;

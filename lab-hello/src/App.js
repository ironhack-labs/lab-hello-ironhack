import React from 'react';
import logo from './ironhack-logo.svg';
import menu from './menu-top.svg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu}  />
        </nav>
        <div className="text-header">
          <h1>Say hello to <br />ReactJS</h1>
          <p>
            You will learn a Frontend 
            <br />framework from scratch, to
            <br />become a Ninja Developper
          </p>
          <a href="">Awesome!</a>
        </div>
      </header>
      </div>
        <section className="App-section">
          <div className="feature">
            <img className="icon" src={icon1}  />
            <h3>Declarative</h3>
            <p>React makes it painless to create UIs</p>
          </div>
          <div className="feature">
            <img className="icon" src={icon2}  />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className="feature">
            <img className="icon" src={icon3}  />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div className="feature">
            <img className="icon" src={icon4}  />
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers</p>
          </div>
        </section>
    </div>
  );
}

export default App;

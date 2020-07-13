import React from 'react';
import logo from './../images/ironhack-logo.svg'
import menu from './../images/menu-top.svg'
import icon1 from './../images/icon1.png'
import icon2 from './../images/icon2.png'
import icon3 from './../images/icon3.png'
import icon4 from './../images/icon4.png'

import './App.css';

function App() {
  return (
    <>
    <section className="App">
      <article>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu} className="App-logo2" alt="menu" />
      </header>
      </article>
      <article className="Body">
        <h1> Say Hello To ReactJS </h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <button type="buton">Awesome!!</button>
      </article>
      </section>
      <section className="App-footer">
        <article>
        <img src={icon1} clasName="icons" alt="icon1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
        </article>

        <article>
        <img src={icon2} clasName="icons" alt="icon1" />
        <h3>Components</h3>
        <p>Build encapsulater components that manage their state.</p>
        </article>
        
        <article>
        <img src={icon3} clasName="icons" alt="icon1" />
        <h3>Single-Way</h3>
        <p>A set of inmutable values are passed to the component's</p>
        </article>
        
        <article>
        <img src={icon4} clasName="icons" alt="icon1" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers</p>
        </article>
        
      </section>
    </>
  );
}

export default App;

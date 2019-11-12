import React from 'react';
import logo from './logo.svg';
import ironhacklogo from './images/ironhack-logo.svg';
import menuicon from './images/menu-top.svg';
import bkgdimg from './images/react-logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        <img src={ironhacklogo} />
        <img src={menuicon} />
      </nav>
      <div className="header-content">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a FrontEnd framework from scratch, to become an Ninka Developer.</p>
        <button>Awesome!</button>
      </div>
      </header>
      <section className="columns4">
        <div className="column"><img src={icon1} alt="icon 1" /><div className="column-content"><h2>Declarative</h2><p>React makes it painless to create interactive UIs.</p></div></div>
        <div className="column"><img src={icon2} alt="icon 2" /><div className="column-content"><h2>Components</h2><p>Build encapsulated components that manage their state.</p></div></div>
        <div className="column"><img src={icon3} alt="icon 3" /><div className="column-content"><h2>Single Way</h2><p>A set of immutable values are passed to the components.</p></div></div>
        <div className="column"><img src={icon4} alt="icon 4" /><div className="column-content"><h2>JSX</h2><p>Statically-typed. designed to run on modern browsers.</p></div></div>
      </section>
      
    </div>
  );
}

export default App;

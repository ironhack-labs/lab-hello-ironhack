import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component{



  render(){
    return (
      <div>
        <div id='hero'>
          <nav id='navbar'>
            <img src='./images/ironhack-logo.svg'></img>
            <img src='./images/menu-top.svg'></img>
          </nav>
          <div id='hero-text'>
            <h1>Say hello to ReactJS</h1>
            <p>
              You will learn a Frontend framework from scratch,
              to become a Ninja Developer
            </p>
            <button>Awesome!</button>
          </div>
        </div>
        <div id='info'>
          <div>
            <img src='./images/icon1.png'></img>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div>
            <img src='./images/icon2.png'></img>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div>
            <img src='./images/icon3.png'></img>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div>
            <img src='./images/icon4.png'></img>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
      

    );
  }
}

export default App;
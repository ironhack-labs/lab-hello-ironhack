import React, {Component} from 'react';
import './App.css';

class App extends Component{
  render(){
      return (
          <div className='App'>
              <header >
                  <img src='images/ironhack-logo.svg' alt=""/>
                  <img src='images/menu-top.svg' alt=""/>
          </header>
          <div className='texto'>
                  <h1>Say hello to React JS</h1>
                  <p> You will learn Frontend framework from scratch to become a Ninja Developer</p>
                  <button>Awesome!</button>
          </div>
          <div className='logos'>
              <div>
                  <img src='images/icon1.png' alt=""/>
                  <h2>Declarative</h2>
                  <p>React makes it painless to create interactive UIs.</p>
              </div>
              <div>
                  <img src='images/icon2.png' alt=""/>
                  <h2>Components</h2>
                  <p>Build encapsulated components that manage their state.</p>
              </div>
              <div>
                  <img src='images/icon3.png' alt=""/>
                  <h2>Single-Way </h2>
                  <p>A set of immutable values are passed to the component’s.</p>
              </div>
              <div>
                  <img src='images/icon4.png' alt=""/>
                  <h2>JSX</h2>
                  <p>Statically-tiped designed to run on modern browsers.</p>
              </div>

          </div>
          </div>
      )

  }
}

export default App;
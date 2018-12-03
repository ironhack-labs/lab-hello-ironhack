import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const topDiv = 
    (
    <header className="App-header">
    <nav> 
      <img src='images/ironhack-logo.svg' alt="logo" />
      <img src='images/menu-top.svg' alt="logo" />
    </nav>
    <br/><br/><br/>
    <div className="topText">
        <h1>Say hello to <br/>ReactJS</h1>
      <span className="mainText">
        You will learn Frontend <br/>
        framework from scratch, to <br/>
        become an Ninka Developer.
      </span>
      <br/><br/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Awesome!
      </a>
    </div>
    </header>
    )
    
    const bottomDiv = 
    (
    <div className="bottomTextTitles">
    <div>
      <img src='images/icon1.png' alt="logo" />
      <h2> Declarative</h2>
      <h4> React makes it <br/> painless to create <br/> interactive UIs.</h4>
    </div> 
    <div>
      <img src='images/icon2.png' alt="logo" />
      <h2> Components</h2>
      <h4> Build encapsulated <br/> components that <br/> manage their state.</h4>
    </div>
    <div> 
      <img src='images/icon3.png' alt="logo" />
      <h2> Single-Way</h2>
      <h4> A set of immutable <br/> values are passed to <br/> the components.</h4>
    </div>
    <div>

      <img src='images/icon4.png' alt="logo" />
      <h2> JSX</h2>
      <h4> Statically-typed, <br/> designed to run on <br/> modern browsers.</h4>
    </div>
    
    </div>
    )

    return (
      <div className="App">
        {topDiv}
        {bottomDiv}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Logo from './photos'

class App extends Component {
  render() {
    return <div className="App">
    <div className="navbar">
      <img className="navLogo" src="images/ironhack-logo.svg" />
      <img  src="images/menu-top.svg" />
    </div>
        <div className="mainDiv">
            <header className="App-header">
            <div className = "headOne">
            <h1>Say hello to React JS!</h1>
            </div>
            <div className= "headTwo">
            <h3>You will learn a FrontEnd framework from scratch, to become a ninja developer</h3>
            </div>
            <br/>
            <div className="buttonOne">
            <button>Awesome!</button>
            </div>
            </header>
        </div>

      <div>
        <Logo/>
      </div>
      </div>;
  }
}

export default App;

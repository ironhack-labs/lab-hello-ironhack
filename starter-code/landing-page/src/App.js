import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Icons from './Icons';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="firstDiv">
        <nav>
         <img className="flexStart" src="/ironhack-logo.svg"/>
         <img className="flexEnd" src="/menu-top.svg"/>
         </nav>


        <h1>Say hello to <br/>ReactJS</h1>
        <p>You will learn a Frontend <br/>framework from scratch, to <br/>become a ninja developer.</p>

        <button>Awesome!</button>
        </div>
        <Icons/>
      </div>
    );
  }
}

export default App;

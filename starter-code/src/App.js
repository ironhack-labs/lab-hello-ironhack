import React, { Component, useDebugValue } from 'react';
import logo from './logo.svg';
import Nav from "./Components/Nav";
import Bottom from "./Components/Bottom";
import './App.css';

class App extends Component{
  render() {

  return (
    <div>
    <div class="top-banner">

    <Nav />
     <div>
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, te become a Ninja Developer.</p>
        <button>Awesome!</button>

      </div>
    </div>
    <Bottom />
    </div>
  ) 
  }
}

export default App;

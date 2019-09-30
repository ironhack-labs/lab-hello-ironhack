import React from 'react';
import Section from './Section'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="flex" className="App-header">
        <div class="flex">
        <div>
        <img width="50px" src="images/ironhack-logo.svg" className="App-logo" alt="logo" />
        </div>
        <div>
        <img width="50px" src="images/menu-top.svg" className="App-logo" alt="logo" />
        </div>
        </div>
       <div className="intro">
         <h1>Say hello to ReactJS</h1>
         <p>You will learn a front-end framework from scratch!</p>
         <a class="btn" href="#">Awesome!</a>
       </div>
      </header>
      <Section />
    </div>

  );
}

export default App;

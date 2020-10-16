import React from 'react';
import Logo from './ironhack-logo.svg';
import './App.css';

const statement = <h1> Say Hello to React JS </h1>;
 
function App() {
  return <div className="App">
  <img src={Logo} alt="crew" />
  {statement}
  <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
  <button>Awesome!</button>
  </div>;
}
 
export default App;

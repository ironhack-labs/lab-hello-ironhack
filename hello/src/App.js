import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import Articles from './Components/Articles'

function App() {
  return (
    <>
      <div className="back">
        <Nav />
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
        <a href="#" class="button">Awesome!</a>
      </div>
      <Articles />
    </>
  )
}

export default App;

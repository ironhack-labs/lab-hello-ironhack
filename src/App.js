// App.js

import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {
  return <div className="App">
    <section className='out'>
    <div className='in'>
      <nav className='logo'>
          <img src='/images/ironhack-logo.svg'/>
          <img src="/images/menu-top.svg"/>

      </nav>
      <h1>Say hello <br/>to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library,an become a super Ninja developer</p>
      <button>Awesome!</button>

    </div>
    <div className='backgrounds'>
        <div className='in-background'>
            <div className='b-1'></div>
            <div className='b-2'></div>
            <div className='b-3'></div>
        </div>
        <div className='b-4'></div>
    </div>
    </section>
    <section className='information'>

    <div className='box'>
        <img src='/images/icon1.png'/>
        <h4>Declarative</h4>
        <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className='box'>
        <img src='/images/icon2.png'/>
        <h4>Components</h4>
        <p>Build encapsulated components that manage their state</p>
    </div>
    <div className='box'>
        <img src='/images/icon3.png'/>
        <h4>Single-Way</h4>
        <p>A set of immutable values are passed to the component's</p>


    </div>
    <div className='box'>
        <img src='/images/icon4.png'/>
        <h4>JSX</h4>
        <p>Staticlly-typed designed to run on modern browsers</p>
    </div>
    </section>
      
  </div>;
}

export default App;

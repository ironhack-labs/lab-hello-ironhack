import React from 'react'
import "./App.css";

const test = <img src="images/icon1.png"></img>

export default function App() {
    return (
      <div>
        <div className="dark-background">
          <div className="navbar">
            <img src="images/ironhack-logo.svg"></img>
            <img src="images/menu-top.svg"></img>
          </div>
          <div className="mainContainer">
            <h1>Say hello to ReactJS</h1>
            <p className="lightFont">You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
            <button>Awesome!</button>
          </div>
        </div>

        <div className='info'>
          <div className='info-card'>
            <img src="images/icon1.png"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className='info-card'>
            <img src="images/icon2.png"></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className='info-card'>
            <img src="images/icon2.png"></img>
            <h3>Single-way</h3>
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div className='info-card'>
            <img src="images/icon4.png"></img>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browers</p>
          </div>
        </div>
      </div>
    );
}

// src/app.js
//npx babel src/app.js see in console
// const app = () => console.log('Babel test works!');

import React from 'react';
import './app.css'


const App = () => {
  return (
    <div className='appMain'>
    <nav>
          <img src="/images/ironhack-logo.svg" alt="Ironhack logo"/>
          <img src="/images/menu-top.svg" alt="Top menu"/>
      </nav>
      <div className='topSection'>
        
        <div className='topSectionText'>
        <div>
          <h1>Say Hello to ReactJS</h1>
          <p>You will learn to use the most <br/> popular frontend library, <br/> and become a Super ninja developer</p>
          <button>Awesome!</button>
        </div>
        </div>
        <div className='reactLogos' >
          <img className='reactLogo1' src="/images/react-logo.svg" alt="react logo" width="200"/>
          <img className='reactLogo2'src="/images/react-logo.svg" alt="react logo" width="175"/>
          <img className='reactLogo1' src="/images/react-logo.svg" alt="react logo" width="150"/>
          </div>
      </div>

      <div className='bottomSection'>
        <div className='bottomItems'>
          <div className='item' >
            <img src="/images/icon1.png" alt="icon 1"/>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className='item' >
          <img src="/images/icon2.png" alt="icon 2"/>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div className='item' >
          <img src="/images/icon3.png" alt="icon 3"/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components</p>
          </div>
          <div className='item' >
          <img src="/images/icon4.png" alt="icon 4"/>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;


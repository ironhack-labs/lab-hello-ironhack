import React from 'react';
import logo  from './ironhack-logo.svg';
import menuTab from './menu-top.svg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">


      <div className="menu-top">
        <div id="Ironhack-logo">
          <img src={logo} alt="logo" />
        </div>
        <div id="Ironhack-menu-tab">
          <img src={menuTab}  alt="tab" />
        </div>
      </div>

      <div className="intro">
        <h1>Say Hello to ReactJS</h1>
          <p>
            You will learn a Frontend Framework from scratch, to become a Ninja Developer
          </p>

          <button class="button">Awesome!</button>  
      </div>

        {/*         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

      </header>

    <div className="App-bottom">

      <div className="box-1">
          <img className="App-image1" src={icon1} alt="react-icon"></img>
          <h1>Declarative</h1>
          <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="box-2">
          <img className="App-image2" src={icon2} alt="react-icon"></img>
          <h1>Components</h1>
          <p>Build encapsulated componenets that manage their state.</p>
      </div>
      <div className="box-3">
          <img className="App-image3" src={icon3} alt="react-icon"></img>
          <h1>Single-Way</h1>
          <p>A set of immutable values are passed to the compoenent's</p>
      </div>
      <div className="box-4">
          <img className="App-image4" src={icon4} alt="react-icon"></img>
          <h1>JSX</h1>
          <p>Statically-typed, designed to run on modern browsers.</p>
      </div>

    </div>

    </div>

  );
}

export default App;

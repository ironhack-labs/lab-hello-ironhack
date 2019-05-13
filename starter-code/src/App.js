import React from 'react';
import './App.css';
import logo from './images/ironhack-logo.svg';
import menu from './images/menu-top.svg';
import atom from './images/react-logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';


function App() {
  return (
    <div className="App">

     

      <header className="App-header">
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={menu} className="menu-icon" alt="menu"/>
        
      </nav>

        <img src={atom} className="react-logo1"/>
        <img src={atom} className="react-logo2"/>
        <img src={atom} className="react-logo3"/>
        <img src={atom} className="react-logo4"/>
        <img src={atom} className="react-logo5"/>
        <img src={atom} className="react-logo6"/>

        <h1>Say Hello to<br></br>
        ReactJS</h1>
        
        <p>
          You will learn a Frontend <br></br>
          framework from scratch, to <br></br>
          become a Ninja Developer.
        </p>

       <button>
         Awesome!
       </button>

      </header>

      <div className="boxes-container">
        <ul className="boxes">
          <li>
            <img src={icon1}/>
            <h3>Declarative</h3>
            <p>React makes it <br></br> painless to create <br></br> interactive UIs.</p>
          </li>
          <li>
            <img src={icon2}/>
            <h3>Components</h3>
            <p>Build encapsulated <br></br> components that <br></br> manage their state.</p>
          </li>
          <li>
            <img src={icon3}/>
            <h3>Single-Way</h3>
            <p>A set of immutable <br></br> values are passed to <br></br> the components.</p>
          </li>
          <li>
            <img src={icon4}/>
            <h3>JSX</h3>
            <p>Statically-typed, <br></br> desiged to run on <br></br> modern browsers.</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

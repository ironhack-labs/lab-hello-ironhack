import React from "react";
// import logo from "./logo.svg";
import mainLogo from "./ironhack-logo.svg";
import menu from "./menu-top.svg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
        <nav className="navbar">
          <img src={mainLogo} className="App-logo" alt="logo" />
          <img src={menu} className="Menu" alt="logo" />
        </nav>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend framework from scratch,to become an Ninja
          Developer.
        </p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a href="https://reactjs.org" className="button">
          Awesome!
        </a>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We Learn React
        </a> */}
      </header>
        <div className='AppBottom'>
        <div className="bottom-icons">
        <img src={icon1} className="bottom-icons" alt="logo" />
        <h3>Declarative</h3>
        <p>React makes it paonless to create interactive UIs.</p>
        </div>
        <div className="bottom-icons">
        <img src={icon2} className="bottom-icons" alt="logo" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="bottom-icons">
        <img src={icon3} className="bottom-icons" alt="logo" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="bottom-icons">
        <img src={icon4} className="bottom-icons" alt="logo" />
        <h3>JSX</h3>
        <p>Statically-typed,designed to run on modern browsers.</p>
        </div>
        </div>
    </div>
  );
}

export default App;

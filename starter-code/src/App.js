import React from "react";
import "./App.css";
import menu from "./menu-top.svg";
import ironhack from "./ironhacklogo.svg";
import reactlogo from "./react.svg";
import declarpic from "./icon1.png";
import comppic from "./icon2.png";
import singlepic from "./icon3.png";
import jsxpic from "./icon4.png";

function App() {
  return (
    <div className="App-header">
      <nav className="main-navbar">
        <img src={ironhack} className="ironhack-logo" alt="ironhack" />
        <img src={menu} className="menu-logo" alt="menu" />
      </nav>

      <img src={reactlogo} className="react-logo1" alt="react" />
      <img src={reactlogo} className="react-logo2" alt="react" />

      <div className="react-header">
        <h1> Say hello to ReactJS</h1>
        <p>
          You will learn a Frontend Framework from scratch, to become a Ninka
          Developer.
        </p>
      </div>

      <button className="main-button" type="button">
        Awesome!
      </button>

      <div className="content-main">
        <div className="boxes">
          <img className="content-pic" src={declarpic} alt="" />
          <p className="content-titles">Declarative</p>
          <span>React makes it painless to create interactive UIs.</span>
        </div>
        
        <div className="boxes">
          <img className="content-pic" src={comppic} alt="" />
          <p className="content-titles">Components</p>
          <span>Build encapsulated components that manage their states.</span>
        </div>
        
        <div className="boxes">
          <img className="content-pic" src={singlepic} alt="" />
          <p className="content-titles">Single-Way</p>
          <span>A set of immutable values are passed to the components.</span>
        </div>

        <div className="boxes">
          <img className="content-pic" src={jsxpic} alt="" />
          <p className="content-titles">JSX</p>
          <span> Statically typed, designed to run on modern browsers. </span>
        </div>
      
      </div>
   
    </div>
  );
}

export default App;

import React from "react";
import menutop from "./images/menu-top.svg";
import reactlogo from "./images/react-logo.svg";
import ironhacklogo from "./images/ironhack-logo.svg";
import decpic from "./images/icon1.png";
import comppic from "./images/icon2.png";
import singlepic from "./images/icon3.png";
import jsxpic from "./images/icon4.png";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="main-navbar">
        <div>
          <img className="nav-logo" src={ironhacklogo} alt="" />
          <img className="menu-nav" src={menutop} alt="" />

          {/* <img className="nav-menu" src={ironhacklogo} alt="" /> */}
        </div>
      </nav>
      <img src={reactlogo} className="react-logo img1" alt="logo" />
      <img src={reactlogo} className="react-logo img2" alt="logo" />
      <header className="App-header">
        <h2 className="main-title">Say Hello to ReactJS</h2>

        <span className="desc-p">
          You will learn a Frontend framework from scratch, to become a Ninka
          Developer
        </span>
        <a
          className=""
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="main-button" type="button">
            Awesome!
          </button>
        </a>
      </header>
      <div className="content-main">
        <div className="boxes">
          <img className="content-pic" src={decpic} alt="" />
        </div>
        <div className="boxes">
          <img className="content-pico" src={comppic} alt="" />
        </div>
        <div className="boxes">
          <img className="content-pic" src={singlepic} alt="" />
        </div>

        <div className="boxes">
          <img className="content-pic" src={jsxpic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;

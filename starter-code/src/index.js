// const React = require('react')
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const iconOne = "../images/icon1.png";
const iconTwo = "../images/icon2.png";
const iconThree = "../images/icon3.png";
const iconFour = "../images/icon4.png";

const ironHackLogo = "../images/ironhack-logo.svg";
const menuTop = "../images/menu-top.svg";
const reactLogo = "../images/react-logo.svg";

const myStyle = {

};

const greeting = (
  <div>
  
    <div className="sectionOne">
    <div className="navBar"> 
    <img src={ironHackLogo} height="40px"></img>
    <img src={menuTop} height="20px"></img>
    </div>
    
    
      <div className="middle">
      <div>
      <h1 className="heading">Say hello to <br></br>ReactJS</h1>
      <p className="pSecOne">
        You will learn a Frontend <br></br> framework form scratch, to <br></br> become an Ninka
        Developer
      </p>
      <a className="myButton"href="url">Awesome!</a>
      </div>
      <div className="imagesBackground">
      <img className="a" src={reactLogo} height="250"></img>
      <img className="b" src={reactLogo} height="200px"></img>
      <img className="c" src={reactLogo} height="200px"></img>
      </div>
      <div className="imgRight">
      <img src={reactLogo} height="150px"></img>
      <img src={reactLogo} height="150px"></img>
      <img src={reactLogo} height="150px"></img>
      </div>

      
      </div>
    </div>

<div className="sectionTwo">
    <div className="petitCarre">
      <img src={iconOne} height="200px"></img>
      <h1>Declarative</h1>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="petitCarre">
      <img src={iconTwo} height="200px"></img>
      <h1>Components</h1>
      <p>Build encapsulated components that manage their state</p>
    </div>
    <div className="petitCarre">
      <img src={iconThree} height="200px"></img>
      <h1>Single-Way</h1>
      <p>A set of immutable values are passed to component's.</p>
    </div>
    <div className="petitCarre">
      <img src={iconFour} height="200px"></img>
      <h1>JSX</h1>
      <p>statically-typed, designed to run on modern browsers.</p>
    </div>
  </div>
  </div>
);

ReactDOM.render(greeting, document.getElementById("root"));

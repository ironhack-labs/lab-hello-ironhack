import React from "react";
import ReactDOM from "react-dom";
import "./style.css"; 

const element = (
<div>
  <div className="intro">

    <div className="navbar">
      <img src='images/ironhack-logo.svg' /> 
      <img src='images/menu-top.svg'/> 
      </div>

      <div className="intro-text">
    <h1>Say hello to ReactJS</h1>
    <p>You will learn Frontend framework from scratch to become a Ninka Developer</p>
    <button>Awesome!</button> 
    </div>
  </div>

  <div className="details">
    <div className="card">
    <img src="images/icon1.png" /> 
    <h3>Declarative</h3>
    <h5>React makes it painless to create interactive UIs</h5>
    </div>
    <div className="card">
    <img src="images/icon2.png" /> 
    <h3>Declarative</h3>
    <h5>React makes it painless to create interactive UIs</h5>
    </div>
    <div className="card">
    <img src="images/icon3.png" /> 
    <h3>Declarative</h3>
    <h5>React makes it painless to create interactive UIs</h5>
    </div>
    <div className="card">
    <img src="images/icon1.png" /> 
    <h3>Declarative</h3>
    <h5>React makes it painless to create interactive UIs</h5>
    </div>
    </div> 
  </div>
)

ReactDOM.render(element, document.getElementById("root"));

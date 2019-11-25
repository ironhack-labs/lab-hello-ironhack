// importing modules for React

import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const reactLogo = "../images/react-logo.svg";

const lab = (
  <div>
    <div id="intro">
      <div class="navbar">
        <img
          src="../images/ironhack-logo.svg"
          alt="Ironhack logo"
          id="ironhack-logo"
        />
        <img src="../images/menu-top.svg" alt="menu-image" id="menu-image" />
      </div>
      <h1 id="heading">Say hello to ReactJS</h1>
      <h4 id="ingress">
        You will learn a Frontend framework from scratch, to become a ninja
        developer
      </h4>
      <button id="btn">Awesome!</button>
      <div className="imgRight">
        <img src={reactLogo} height="150px"></img>
        <img src={reactLogo} height="150px"></img>
        <img src={reactLogo} height="150px"></img>
      </div>
    </div>

    <div id="box-div">
      <div className="boxes">
        <img src="../images/icon1.png" alt="" class="box-image" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon2.png" alt="" class="box-image" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon3.png" alt="" class="box-image" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the component's.</p>
      </div>
      <div className="boxes">
        <img src="../images/icon4.png" alt="" class="box-image" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(lab, document.getElementById("root"));

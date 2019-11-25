import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const logoUrl = "./images/ironhack-logo.svg";
const menuTopUrl = "./images/menu-top.svg";
const buttonUrl =
  "https://image.shutterstock.com/image-vector/awesome-comic-bubble-retro-text-260nw-343884845.jpg";
const iconUrl1 = "./images/icon1.png";
const iconUrl2 = "./images/icon2.png";
const iconUrl3 = "./images/icon3.png";
const iconUrl4 = "./images/icon4.png";

const myPage = (
  <div>
    <div className="main-container">
      
      <div className="nav-images">
      <img src={logoUrl}></img>
      <img src={menuTopUrl}></img>
      </div>

      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn a Frontend framework from Scratch, to become a Ninka
        Developer.
      </p>
      <a href={buttonUrl} className="button">
        Awesome!
      </a>
    </div>

    <div className="details-container">
      <div className="icons">
        <img src={iconUrl1}></img>
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className="icons">
        <img src={iconUrl2}></img>
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </div>

      <div className="icons">
        <img src={iconUrl3}></img>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
      </div>

      <div className="icons"> 
        <img src={iconUrl4}></img>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(myPage, document.getElementById("root"));

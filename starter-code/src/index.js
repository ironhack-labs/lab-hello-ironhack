import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const logo = "./images/ironhack-logo.svg";
const logo1 = "./images/menu-top.svg";
const logo2 = "./images/react-logo.svg";
const icon1 = "./images/icon1.png";
const icon2 = "./images/icon2.png";
const icon3 = "./images/icon3.png";
const icon4 = "./images/icon4.png";
const name = "Say hello to ReactJS";

const myStyle = {
  color: "white"
};

const tag = (
  <div>
    <div style={{ backgroundColor: "#212342" }}>
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="logo1">
        <img src={logo1}></img>
      </div>
      <div className="logo2">
        <img src={logo2}></img>
      </div>
      <h1 className="heading"> {name}</h1>
      <p style={myStyle}>
        You will learn a frontend <br></br>framework from scratch, to<br></br>{" "}
        become a Ninja Developer.
      </p>
      <button className="button">Awesome! </button>
    </div>
    <div>
      <div className="container">
        <div className="logo">
          <img src={icon1}></img>
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIS.</p>
        </div>
        <div className="logo">
          <img src={icon2}></img>
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="logo">
          <img src={icon3}></img>
          <h2>Single-way</h2>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="logo">
          <img src={icon4}></img>
          <h2>JSX</h2>
          <p>Statically -typed designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(tag, document.getElementById("root"));

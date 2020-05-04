import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const name = () => {
  return "Nate";
};
const element = (
  <div>
    <div className="container" style={{ backgroundColor: pink }}>
      <img src="../images/ironhack-logo.svg"></img>
      <img src="../images/menu-top.svg"></img>
      <h1 className="div">
        Say Hello <br></br> to ReactJs
      </h1>
      <p>
        You will learn a front-end framework from scratch, to become a Ninka
        Developer
      </p>
      <button>Awesome!</button>
    </div>
    <div className="react">
      <div>
        <h3>Declarative</h3>
        <img src="../images/icon1.png"></img>
      </div>
      <div>
        <h3>Component</h3> <img src="../images/icon2.png"></img>
      </div>
      <div>
        <h3>Single-Way</h3>
        <img src="../images/icon3.png"></img>
      </div>
      <div>
        <h3>JSX</h3> <img src="../images/icon4.png"></img>
      </div>
    </div>
  </div>
);

// const element = React.createElement('h1', {className: 'div'}, 'Hello '{name()})
ReactDOM.render(element, document.getElementById("root"));

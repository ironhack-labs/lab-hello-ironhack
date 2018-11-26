import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./App.css";

ReactDOM.render(
  <section className = "partone">
    <div className = "firstpart">
    <nav>
      <img src = "../images/ironhack-logo.svg"/>
      <img src = "../images/menu-top.svg"></img>
    </nav>

    <h1>Say  hello to <br/>reactJs</h1>
    <p>You will lweran frontend <br/> framework from scratch,<br/>to bacome an Nnka</p>
    <button>Awesome</button>
    </div>


    <div className="imagepart">
      <div className="box" >
        <img src = "../images/icon1.png"></img>
        <h5>Declarative</h5>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="box">
        <img src = "../images/icon2.png"></img>
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state</p>
     </div>
     <div className="box">
       <img src = "../images/icon3.png"></img>
       <h5>Single Way</h5>
       <p>Build encapsulated components that manage their state</p>
     </div>
     <div className="box">
       <img src = "../images/icon4.png"></img>
       <h5>JSX</h5>
       <p>Build encapsulated components that manage their state</p>
     </div>

    </div>
    <App />
  </section>,

  document.getElementById("root")
);

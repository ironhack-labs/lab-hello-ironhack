import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(
  <section>
  <header>
    <nav>
    <img src="../images/ironhack-logo.svg"></img>
    <img src="../images/menu-top.svg"></img>
    </nav>
    <h1> Say hello to <br/> ReactJS</h1>
    <p>You will learn a Frontend framework from scratch, to become and Ninja Developer</p>
    <button>Awesome!</button>
  </header>
    <App />
  </section>,
  
  document.getElementById("root")
);

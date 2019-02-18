import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

// import logo from "../images/ironhack-logo.svg";
// import menu from "../images/menu-top.svg";

ReactDOM.render(
  <main>
    <header>
      <img src="/images/ironhack-logo.svg" />
      <img src="/images/menu-top.svg" />
    </header>
    <App />
  </main>,
  document.getElementById("root")
);

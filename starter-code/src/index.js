import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Bye from "./Goodbye.js";

ReactDOM.render(
  <App />,
  document.getElementById("root")
);

ReactDOM.render(
  <Bye />,
  document.getElementById("time")
);
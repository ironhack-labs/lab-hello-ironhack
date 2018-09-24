// this file usually has very little here. 
import React from "react"; // ES6 way to do const React = require('react') but better
import ReactDOM from "react-dom"; // just the name because this is a package

import App from "./App.js"; // ./ is because it is a separate file

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
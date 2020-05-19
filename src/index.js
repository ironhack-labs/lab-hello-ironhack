// Now we need to tell our app where to hook into the DOM of our index.html file. Create a file called index.js in your src directory

// ReactDOM.render is the function that tells React what to render and where to render it — In this case, we’re rendering a component called App (which we’ll create soon), and it’s being rendered at the DOM element with the ID root.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
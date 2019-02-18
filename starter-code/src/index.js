// "import" is the official JS syntax that's like the Node.js "require"
// (doesn't work on browsers yet though)

import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

// HTML in JS without a string -> JSX syntax
// ReactDOM.render() takes two arguments: HTML & DOM element
ReactDOM.render(
  <div>
    {/* <h1>Hello, world!</h1>
    <p>This is the index.js file</p> */}

    {/* Display the App component in the section*/}
    <App />
  </div>,
  document.getElementById("root")
);

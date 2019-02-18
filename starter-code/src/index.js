import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";

// to render in DOM using React -> ReactDOM (declared above)
// ReactDOM takes two args:
// 1) the HTML you want to display
// 2) the DOM selector in which you want to display it
ReactDOM.render(<App />, document.getElementById("root"));

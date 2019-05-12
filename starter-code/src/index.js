import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

function App() {
  return(
    <div>
      <p>Hola</p>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
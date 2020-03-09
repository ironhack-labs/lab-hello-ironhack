import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header";
import { Col } from "./col";
import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const App = () => {
    return (
      <div>
        <Header />
        <Col />
      </div>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));
});

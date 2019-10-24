import React from "react";
import logoSrc from "./images/logao.svg";
import imgScr from "./images/menu-top.svg";

import Button from "./components/Button";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar
          parentClass="red navbar"
          logoClass="blue"
          logoSrc={logoSrc}
          menuClass="blue"
          menuSrc={imgScr}
        ></NavBar>
        <h1>
          Say hello to <br /> ReactJS
        </h1>
      </header>
      <Button aClass="red " bClass="blue button" text="Awesome!"></Button>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
//import App from "./App.js";
import IronHackLogo from "./components/IronHackLogo.js";
import Menu from "./components/Menu.js";
import Title from "./components/Title.js";
import SubTitle from "./components/SubTitle.js";
import Button from "./components/Button.js";
import Main from "./components/Main.js";
import "../public/stylesheets/App.css";



ReactDOM.render(
  <div className="App">
    <div className="Header" style={{
      backgroundImage: "url(images/react-logo.svg)",
      //repeat: no-repeat
      }}>
       <div className="nav">
          <IronHackLogo />
          <Menu />
        </div>
        <Title />
        <SubTitle />
        <Button />
    </div>
      <Main />
  </div>,
  document.getElementById("root")
);
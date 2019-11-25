import React from "react";
import HeaderMain from "./HeaderMain";
import Main from "./Main";
import Button from "./Button";
import Icon from "./Icon";
import "./css/index.css";
import "./css/HeaderMain.css";

export default function App() {
  return (
    <div className="div-container">
      <div>
        <HeaderMain />
      </div>
      <div className="main-container">
        <Main />
      </div>
      <div className="btn-container">
        <Button />
      </div>
      <div>
        <Icon />
      </div>
    </div>
  );
}

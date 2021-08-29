import React from "react";
import "./header.css";
import IronhackLogo from "../../../public/images/ironhack-logo.svg";
import MenuTop from "../../../public/images/menu-top.svg";
import ReactBackground from "../../../public/images/react-logo.svg";

const header = () => (
  <header>
    <div className="menu-container">
      <div className="text-container">
        <img className="logo" src={IronhackLogo}></img>
        <img className="menu" src={MenuTop}></img>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer
        </p>
        <button>Awesome!</button>
      </div>
      <div className="img-container">
        <img className="first" src={ReactBackground}></img>
        <img className="second" src={ReactBackground}></img>
        <img className="third" src={ReactBackground}></img>
        <img className="fourthy" src={ReactBackground}></img>
        <img className="fivity" src={ReactBackground}></img>
        <img className="sixty" src={ReactBackground}></img>
      </div>
    </div>
  </header>
);

export default header;

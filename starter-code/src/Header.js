import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <img src="../images/ironhack-logo.svg" className="logo" />
      <img src="../images/menu-top.svg" className="menu" />
      <img src="../images/react-logo.svg" className="logo-uno" />
      <img src="../images/react-logo.svg" className="logo-dos" />
      <img src="../images/react-logo.svg" className="logo-tres" />
      <img src="../images/react-logo.svg" className="logo-cuatro" />
      <img src="../images/react-logo.svg" className="logo-cinco" />
      <img src="../images/react-logo.svg" className="logo-seis" />
      <h1> Say hello to ReactJS </h1>
      <p className="resume">
        You wil learn a Frontend framework form scratch, to become an Ninka
        Developer.
      </p>
      <button className="awesome">Awesome!</button>
    </div>
  );
}

export default Header;

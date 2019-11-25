import React, { Component } from "react";
import "./styles.css";

export default function HeaderMain() {
    return (
      <header className="header-main">
          <nav className="nav">
          <img className="logo" id="logo1" src="images/ironhack-logo.svg" alt="logo Ironhack"/>
          <img className="logo" id="logo2" src="images/menu-top.svg"  alt="menu-top"/> 
        </nav>
      </header>
    );
  }
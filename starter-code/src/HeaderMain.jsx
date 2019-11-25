import React, { Component } from "react";
import "./styles.css";

export default function HeaderMain() {
    return (
      <header id="header-main">
          <nav>
          <img className="logo" src="images/ironhack-logo.svg" alt="logo Ironhack"/>
          <img className="logo" src="images/menu-top.svg"  alt="menu-top"/> 
        </nav>
      </header>
    );
  }
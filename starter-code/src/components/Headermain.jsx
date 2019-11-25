import React from "react";
import Logo from "./Logo";
//Import CSS
import "./../css/headermain.css";

export default function Headermain() {
  return (
    <header id="header">
      <Logo filepath="./images/ironhack-logo.svg" text="ironhack logo" />
      <Logo filepath="./images/menu-top.svg" text="menu-top" />
    </header>
  );
}

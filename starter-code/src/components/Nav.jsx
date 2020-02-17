import React from "react";
import Logo from "./Logo";
import MenuToggler from "./MenuToggler";

export default function Nav() {
  return (
    <div className="main-nav">
      <Logo url="./images/ironhack-logo.svg" alt="Ironhack"></Logo>
      <MenuToggler url="./images/menu-top.svg" alt="Open Menu"></MenuToggler>
    </div>
  );
}

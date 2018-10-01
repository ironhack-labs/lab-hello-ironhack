import React from "react";

export const NavBar = ({navClass, logos}) => {
  return (
    <div className={navClass}>
      <div className={logos}>
        <img src="./images/ironhack-logo.svg"/>
        <img src="./images/menu-top.svg"/>
      </div>
      <div className="text">
        <h1>Say hello to ReactJS</h1>
        <p>You will learn a Frontend framework from scratch, to become a Ninka Developer</p>
        <button className="button">Awesome!</button>
      </div>
    </div>
)}


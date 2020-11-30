import React from "react";
import  "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="images/ironhack-logo.svg"
        className="App-logo"
        alt=""
      />
       <img
        src="images/menu-top.svg"
        className="menu"
        alt=""
      />
    </div>
  );
}

export default Navbar;
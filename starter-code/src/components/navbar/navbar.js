import React from "react";
import "./Navbar.css";


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
       <nav>
            <img id="logo" src="/images/ironhack-logo.svg" alt="Logo IH"/>
             <img id="menu-top" src="/images/menu-top.svg" alt=""/>
       </nav>
      </div>
    );
  }
}

export default Navbar;

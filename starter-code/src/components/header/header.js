import React from "react";
import "./header.css";

class Header extends React.Component {


  render() {

    
    return (
      <div id="header" className="Header">
      
        <img class="iron-logo" src="images/ironhack-logo.svg" alt="Ironhack-logo"/>
        <img class="menu-top" src="images/menu-top.svg" alt="Menu-logo"/><br/><br/>
        <h1>Say hello to ReactJS</h1>
        <p class="firts-parr">You will learn a Frontend framework from scratch, to become an Ninka Developer</p>
        <button>Awesome!</button>
        
        
      </div>
    );
  }
}

export default Header;
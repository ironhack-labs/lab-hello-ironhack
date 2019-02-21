import React, { Component } from "react";
import "./App.css";

class Header extends Component{
  render(){
    return(
      <div className="blue-section">
        <div className="navbar">
          <img src="../images/ironhack-logo.svg"></img>
          <img src="../images/menu-top.svg"></img>
        </div>
       
        <div className="text">
          <span id="title">
            Say Hello to 
          </span> <br/>
          <span id="title">
            ReactJS
          </span>
            <br/>
          <p className="intro-text">
            You will learn a frontEnd <br/>
            framework from scratch, to <br/>
            become a Ninja Developer.
          </p>
            <br/>
          <button type="button" className="btn ">Awesome!</button>
       
        </div> 
      </div>  
    )
  }
}

export default Header;
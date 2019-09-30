import React, { Component } from "react";
import "./style.css";
const Logo1 = "images/icon1.png";
const Logo2 = "images/icon2.png"
const Logo3= "images/icon3.png"
const Logo4= "images/icon4.png"
const ironhacklogo = "images/ironhack-logo.svg"
const menulogo = "images/menu-top.svg"

class App extends Component {
  render() {
    return (
      <div className="App">
      <div id="ironhacklogo">
      <img src={ironhacklogo} alt="didnt load"/>
      </div>
      <div id="menu">
      <img src={menulogo} alt="didnt load"/>
      </div>
        <h1> Say hello to ReactJS </h1>
        <p>You will learn a frontend framework from scratch, to become an Ninka Developer.</p>
        <button>Awesome!</button>
        
        
        
        
        
        
        
        
        
        <div class="row">
        <div class="column">
        <img src={Logo1} alt="Smiley face" />
        <img src={Logo2} alt="Smiley face" />
        <img src={Logo3} alt="Smiley face" />
        <img src={Logo4} alt="Smiley face" />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
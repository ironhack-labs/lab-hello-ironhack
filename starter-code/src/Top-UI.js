import React, { Component } from "react";
import "./Top-UI.css";

class TopUI extends Component {
  render() {
    return (
      <div className="top">
      <div>
        <img className="img1" src="/images/ironhack-logo.svg"/>
        <img className="img2" src="/images/menu-top.svg"/>
      </div> 
        <h1 className="h1"> Say hello to <br/>ReactJS </h1>
        <p className="p">You wil learn a Frontend 
          <br/>framework from scratch, to
          <br/>become an Ninja Developer.
        </p>
        <button className="button">Awesome!</button>
      </div>
    );
  }
}
// <div><img src="..\public\images\ironhack-logo.svg"/></div> <img src=""/>
export default TopUI;
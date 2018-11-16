import React, { Component } from 'react';
import '../public/css/landing.css';

class Landing extends Component {
  render(){
    return (
      <div className="background">
        <div className="nav"> 
          <img src="images/ironhack-logo.svg" alt="logo"/>
          <img src="images/menu-top.svg" alt="menu"/>
        </div>
        <div className="info">
          <h1 className="title">Say hello to ReactJS</h1>
          <p className="text">You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
          <button>Awesome!</button>
        </div>
        <div className="images">
          <img id="img-1" src="images/react-logo.svg" alt="logo-react"/>
          <img id="img-2" src="images/react-logo.svg" alt="logo-react"/>
          <img id="img-3" src="images/react-logo.svg" alt="logo-react"/>
          <img id="img-4" src="images/react-logo.svg" alt="logo-react"/>
          <img id="img-5" src="images/react-logo.svg" alt="logo-react"/>
          <img id="img-6" src="images/react-logo.svg" alt="logo-react"/>
        </div>
      </div>
    );
  }
}

export default Landing;
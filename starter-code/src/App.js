import React, { Component } from "react";
import "./App.css";
import "./Navbar.css";
import Navbar from "../components/Navbar";

class App extends Component {
  state = {
    pictureLogo: {path: '/images/ironhack-logo.svg',
                  class: 'logo'
    },
    pictureMenu: {path: '/images/menu-top.svg',
                  class: 'menu'
    } 
  }
  render() { 
    return (
        <div className="mainContainer">
          <div className="upperContainer">
            <div className="navbarContainer">
              <Navbar class={this.state.pictureLogo.class} path={this.state.pictureLogo.path}/>
              <Navbar class={this.state.pictureMenu.class} path={this.state.pictureMenu.path} />
            </div>
            <div className="textContainer">
              <h1 className="white">Say Hello to ReactJS</h1>
              <p className="white">You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
              <button>Awesome!</button>
            </div>
          </div>
          <div className="lowerContainer">
          <div className="articleContainer">
            <img src="/images/icon1.png"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </div>
          <div className="articleContainer">
            <img src="/images/icon2.png"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="articleContainer">
            <img src="/images/icon3.png"/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
          <div className="articleContainer">
            <img src="/images/icon4.png"/>
            <h2>JSX</h2>
            <p>Statically typed, designed to run on a modern browsers.</p>
          </div>
          </div>
        </div>
     )
  }
}

export default App; 
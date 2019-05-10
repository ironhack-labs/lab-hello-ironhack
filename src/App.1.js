import React, { Component } from 'react';
import Footer from "./components/Footer";
export class App extends Component {
  render() {
    return (<div className="App">
      <div className="header">
        <nav className="nav">
          <img src="./images/ironhack-logo.svg" alt="logo"></img>
          <img src="./images/menu-top.svg" alt="menu"></img>
        </nav>
        <div className="body">
          <h1>
            Say hello to ReactJS
          </h1>
          <h3>
            You will learn a Frontend framework from scratch, to become a Ninka Developer.
          </h3>
          <button>
            Awesome!
          </button>
        </div>
      </div>
      <Footer />
    </div>);
  }
}

import React, { Component } from 'react';
import './App.css';
import Footer from './footer.js';


class App extends Component {
  render() {
    return (
      <div className="app">

        <div className="nav-bar">
            <img src="images/ironhack-logo.svg" alt="image"/>
            <img class="top-right" src="images/menu-top.svg" alt="image2"/>
            </div>
        <div className="center-content">
              <h1>Say hello to ReactJS</h1>        
        </div>
        <div className="center-p-content">
            <h3> You will learn a Frontend framework from scratch, to become a Ninja Developer.</h3>
        </div>
          <button class="button">Awesome!</button>
         
        <Footer />

      </div>
    );
  }
}

export default App;

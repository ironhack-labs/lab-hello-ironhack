import React, { Component } from 'react';
import './App.css';
import topimg from '../src/images/ironhack-logo.svg';
import topline from '../src/images/menu-top.svg';

class App extends Component {
  render() {
    return (
      <div className="top">
        <img src={topimg} alt="Logo" />
        <img className="right" src={topline} alt="Logo" />

        <div className="bogtext">
        Say hello to  ReactJS
            
      </div>
          <div className="smalltext a ">
     You will learn a Frontend framewsork from scratch, to become an ninka Developer
                 
      </div>
        <input className="btn"  value="Awesome!"  type="submit"/>
      </div>
    );
  }
}





export default App;

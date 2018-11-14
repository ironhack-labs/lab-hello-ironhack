import React, { Component } from 'react';


import './Arriba.css';

class Arriba extends Component {

  render() {
    return (
      <div className="arriba">
        <img src='images/ironhack-logo.svg' />
                <img src='images/menu-top.svg' />
                <img src='images/react-logo.svg' />
        <h1>Say hello to</h1>
        <h1>ReactJS</h1>
        <p>You will learn a Frontend</p>
        <p>framework from scratch, to</p>
        <p>becaome an Ninka Developer.</p>
        <button>Awesome!</button>
      </div>
    )
  }

}

export default Arriba;
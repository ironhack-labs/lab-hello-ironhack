import React, { Component } from "react";
import '../css/App.css';


class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
      <div>
        <img src={require('../images/icon1.png')} alt='okay'/>
        <h1>Declarative</h1>
        <p>Hola mundo lo que sea Lorem<br/>  ipsum, dolor sit amet consectetur </p>
      </div>

      <div>
        <img src={require('../images/icon2.png')} alt='okay'/>
        <h1>Retrospective</h1>
        <p>Hola mundo lo que sea Lorem<br/>  ipsum, dolor sit amet consectetur </p>
      </div>

      <div>
        <img src={require('../images/icon3.png')} alt='okay'/>
        <h1>IronHack</h1>
        <p>Hola mundo lo que sea Lorem<br/>  ipsum, dolor sit amet consectetur </p>
      </div>

      <div>
        <img src={require('../images/icon4.png')} alt='okay'/>
        <h1>Segmentacion</h1>
        <p>Hola mundo lo que sea Lorem<br/>  ipsum, dolor sit amet consectetur </p>
      </div>
      </div>

    );
  }
}

export default Footer;
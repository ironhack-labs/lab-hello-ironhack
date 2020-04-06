import React, { Component } from 'react';
import '../main.css';

class Title extends Component {
  render(){
    return (
      <div className="Title">
        <div className="App-Title">
          <h1>Say hello to <br></br> React JS</h1>
          <h2>You will learn a frontend <br></br> Framework, from scratch to <br></br> become a Ninja Developer</h2>
          <button className='btn'>Awesome</button>
        </div>
      </div>
    );
  }
}

export default Title;
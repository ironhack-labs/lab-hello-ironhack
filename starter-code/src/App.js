import React from 'react';
import './App.js';
import Menu from './Menu.js';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="container">
      <div>
        <Menu/>
        <h1>Say Hello to ReactJS</h1>
        <h2>You will learn a frontend framework from scratch, to become a Ninja Developer.</h2>
        <button>Awesome!</button>
      </div>
      <div>
          <div>
            
          </div>
          <img src="./images/icon1.png"/>
          <img src="./images/icon2.png"/>
          <img src="./images/icon3.png"/>
          <img src="./images/icon4.png"/>
      </div>
      <div>
          <p>Bla bla bla</p>
          <p>Bla bla bla</p>
          <p>Bla bla bla</p>
          <p>Bla bla bla</p>
      </div>
      </div>

    );
  }
}

export default App;
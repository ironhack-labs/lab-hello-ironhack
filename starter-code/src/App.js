import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    }
   
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl: ''
    };
    
    const elementMenu = (
      <div className="menu">
        <img src="/images/ironhack-logo.svg" />
        <img src="/images/menu-top.svg" />
      </div>
    );
    const elementHeader = (
      <div className="header">
        <h1>Say hello to ReactJs</h1>
        <h2>You will learn a frontend framework from scratch, to become a Ninja Developer</h2>
        <a>Awesome!</a>
      </div>
      
    );
    const elements = (
      <div className="elements">
          <div className="feature">
          <img src="/images/icon1.png" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="feature">
          <img src="/images/icon2.png" />
          <h3>Components</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="feature">
          <img src="/images/icon3.png" />
          <h3>Single-Way</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="feature">
          <img src="/images/icon4.png" />
          <h3>JSX</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>

      </div>
      
    );
    return (
      <div className="App">
        <div className="header-bg">
          {elementMenu}
          {elementHeader}
        </div>
        <div>
        {elements}  
        </div>
      </div>
     
    );
  }
}

export default App;


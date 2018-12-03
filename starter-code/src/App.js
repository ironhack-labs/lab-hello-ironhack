import React, { Component } from "react";
import './App.css'
import Navbar from './Navbar.js'

class App extends Component {
  state = {
    picture: 'images/ironhack-logo.svg',
    'menu': [
      {'label': 'Home', 'url': 'https://google.com'},
      {'label': 'About', 'url': 'https://aboutyou.nl'},
      {'label': 'Contact', 'url': 'https://youtube.com'}
    ]
  }
 
  render () {
    const formatOpening = (user) => {
      return `${user.firstName}`;
    }  
    const user = {
      firstName: 'People',
      lastName: 'Nowadays'
    }

    const element = (
      <h2>
        Say Hello to ReactJS, {formatOpening(user)} 
      </h2>
    );
    const elementTwo = (
      <p>You will learn a Frontend framework from scratch to become a Ninja Developer</p>
    );
    return (
      <div>
        <div>
          <Navbar 
            image={this.state.picture} 
            menu={this.state.menu}
          />
        </div>
        <div className="Content">
          <div className="App">
            {element}
          </div>

          <div className="Subtitle">
            {elementTwo}
          </div>
        </div>
      </div>
    )
  }
}

export default App;




// import React from 'react';
import Cajita from './Cajita';
import Navbar from './navbar'
import Main from './Main'
import React, { Component } from 'react'



class App extends Component {
  constructor() {
    super();
    this.iconos = [
      {
        image: '/images/icon1.png',
        title: 'Declarative',
        desc: 'React makes it painless to create interactive UIs.',
      },
      {
        image: '/images/icon2.png',
        title: 'Components',
        desc: 'Build encapsulated components that manage their state.',
      },
      {
        image: '/images/icon3.png',
        title: 'Single-Way',
        desc: 'A set of immutable values are passed to the component\'s.',
      },
      {
        image: '/images/icon4.png',
        title: 'JSX',
        desc: 'Statically-typed, designed to run on modern browsers.',
      }
    ]
  }

  render() {
    return (
        
      <div className="App">
          
          <div className="fatherNav"><Navbar></Navbar></div>
          <div className="fatherMain"><Main></Main></div>
          <div className="fatherCajita">
          {this.iconos.map(icono => (
            <Cajita
            image = {icono.image}
            title = {icono.title}
            desc = {icono.desc}
            ></Cajita>
          ))}
          </div>
        
      </div>
    )
  }
}


export default App;
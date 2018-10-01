import React, { Component } from 'react'

// Styles

import './App.css'

// Components
import Button from './components/Button'

class App extends Component{

  render(){
    return (

      <div className='App'>
        <header>
        <img src='images/ironhack-logo.svg'/>
        <img src='images/menu-top.svg'/>
        </header>
        <div className='body'>
          <h1>Say hello to React</h1>
          <p>
            You will learn a Frontend
            framework from scratch, to
            become an Ninja Developer.
          </p> 
          <Button/>   
        </div>
        <div className="logos">
                <div>
                    <img src="images/icon1.png" alt="icon1"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div>
                    <img src="images/icon2.png" alt="icon2"></img>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="images/icon3.png" alt="icon3"></img>
                    <h3>Single-way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div>
                    <img src="images/icon4.png"alt="icon4"></img>
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    )
  }

}

export default App;
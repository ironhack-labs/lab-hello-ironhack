import React from 'react' 
import logo from '../../src/ironhack-logo.svg'
import hambur from '../../src/menu-top.svg'
import Button from '../components/Button'

const navbar = () => {
    return (
        <nav className="App-header">
            <div className="nav-center">
                <img src={logo} className="App-logo" alt="logo" />
                <img src={hambur} className="App-logo" alt="logo" />
            </div>
        <h1>Say Hello <br></br>to React Js</h1>
        <h3>You will learn how to use<br></br>the most popular frontend library,<br></br> and become super Ninja developer </h3>
        <Button />    
        </nav>
    );
  }
   
export default navbar;
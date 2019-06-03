import React, {Component} from 'react'
import './Navigation.css'

class Navigation extends Component {
  render(){
    return (
      <nav className="nav-bar">
       <img className="logo" src="/images/ironhack-logo.svg"></img>
       <img className="menu"src="/images/menu-top.svg"></img>

      </nav>
    )
  }
}



export default Navigation
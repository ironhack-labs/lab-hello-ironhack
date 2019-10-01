import React, { Component } from 'react'
import NavBar from './../NavBar/NavBar'
import Home from './../Home/Home'
import "./Header.css";

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='Header'>
        <header>
          <NavBar></NavBar>
          <Home></Home>
        </header>
      </div>
    )
  }
}
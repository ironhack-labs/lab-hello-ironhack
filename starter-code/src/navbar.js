import React, { Component } from 'react'
import './navbar.css'

export default class navbar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav>
        <img src="/images/ironhack-logo.svg" alt=""/>
        <img src="/images/menu-top.svg" alt=""/>
      </nav>
    )
  }
}

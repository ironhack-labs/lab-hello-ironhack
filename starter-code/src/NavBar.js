import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className="NavBar">
       <img src="/images/ironhack-logo.svg" height="50" width="50" />
       <img src="/images/menu-top.svg" height="50" width="50" />
      </div>
    )
  }
}

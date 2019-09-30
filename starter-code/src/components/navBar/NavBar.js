import React, { Component } from 'react'

export default class NavBar extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <nav>
        <img id='logo' src={this.props.logo} alt="company log"/>
        <img id='menu' src={this.props.menu} alt="Menu icon"/>
      </nav>
    )
  }
}

import React, { Component } from 'react'
import Nav from "./Nav"
import Main from './Main'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Nav></Nav>
        <Main></Main>
      </div>
    )
  }
}

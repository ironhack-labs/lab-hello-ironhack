import React, { Component } from 'react'
import Nav from "../src/Nav"

export default class Header extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="title">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn a Frontend<br />framework from scratch, to<br />become a Ninja Developer</p>
          <button>Awesome!</button>
        </div>
      </div>
    )
  }
}

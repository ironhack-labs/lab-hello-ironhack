import React, { Component } from 'react'
import Intro from './Intro'
import Info from './Info'
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Info />
      </div>
    )
  }
}

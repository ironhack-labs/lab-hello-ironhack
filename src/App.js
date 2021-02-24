import React, { Component } from 'react'
import Hero from './Hero'
import Features from './Features'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Hero />
        <Features />
      </div>
    )
  }
}

export default App
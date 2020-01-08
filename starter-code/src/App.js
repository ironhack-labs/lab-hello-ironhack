import React, { Component } from 'react'
import FeaturesList from './components/FeaturesList'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <FeaturesList />
      </div>
    ) 
  }
}

export default App
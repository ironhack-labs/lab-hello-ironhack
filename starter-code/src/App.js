import React, { Component } from 'react';
import Hero from './components/Hero.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
import React from 'react'
import Hero from './components/Hero.js'
import Cards from './components/Cards.js'
class App extends React.Component {
  render() {
    return (
      <div id='page'>
        <Hero />
        <Cards />
      </div>
    )
  }
}
export default App
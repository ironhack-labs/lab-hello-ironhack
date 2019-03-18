import React, {Component} from 'react'

import Nav from '../components/Nav'
import Header from '../components/Headers'
import Section from '../components/Section'

class App extends Component {

  render () {
    return (
    <main className="App">
      <Nav />
      <Header />
      <Section />
    </main>

    )
  }

}

export default App


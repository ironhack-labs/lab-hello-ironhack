import React, { Component, Fragment } from 'react'
import List from './List'
import Main from './Main'
import './App.css'

class App extends Component {
  render() {
    return (
    <Fragment>
      <Main/>
      <List/>
    </Fragment>
    )
  }
}

export default App
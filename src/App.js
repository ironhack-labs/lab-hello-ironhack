import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Body from './components/Body'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <Header></Header>
        <Body></Body>
      </div>
    )
  }
}


export default App;

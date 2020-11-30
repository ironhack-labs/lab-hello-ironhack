import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import Section from './components/Section.js'

class App extends Component {
    render(){
        return (
            <div className="App">
                <Nav></Nav>
                <Header></Header>
                <Section></Section>
            </div>
        )
    }
}

export default App
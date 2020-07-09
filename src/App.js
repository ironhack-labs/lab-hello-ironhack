import React, { Component } from 'react'
import './app.css'
import Header from './components/Header'
import Features from './components/Features'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Features />
            </div>
        )
    }
}

export default App
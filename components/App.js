import React, { Component } from 'react'
import '../public/App.css'
import Hero from './Hero.js'
import Features from './Features.js'


class App extends Component {
    render() {
        return (
            <div className="complete-page">
                <Hero />
                <Features />
            </div>
        )
    }
}

export default App
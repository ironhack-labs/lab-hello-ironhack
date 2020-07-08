import React, { Component } from 'react'
import "../app.css"
import Navbar from "./Navbar"
import Section1 from "./Section1"
import Section2 from "./Section2"

class App extends Component {
    render() {
        return (
            <div id="app">
                <Navbar logoImg="/images/ironhack-logo.svg" menuImg="/images/menu-top.svg"/>
                <Section1 />
                <Section2 />
            </div>
        )
    }
}

export default App;
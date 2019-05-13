import React, { Component } from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import "./style.css"

class App extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Details />
            </div>
        );
    }
}

export default App;
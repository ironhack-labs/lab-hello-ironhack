import React, { Component } from 'react';
import logo from '../public/ironhack-logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Feature from './components/Feature'


class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Main />
                <Feature />
            </div>
        );
    }
}

export default App;

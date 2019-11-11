import React, { Component } from 'react';
import './App.css';

class App extends Component {
    
    
    render() {

        const logo = (
            <img class='logo' src='images/ironhack-logo.svg' alt="logo"></img>
        ); 

        const menu = (
            <img class='menu' src='images/menu-top.svg' alt ="menu"></img>
        ); 

        const intro = (
            <div class='intro'>
                <h1>Say hello to ReactJS</h1>
                <h3>You will learn a Frontend framework from scratch to become a Ninja Developer</h3>
                <button> Awesome! </button>
            </div>
        );

        const infoPics = (
            <div class='info-section'>
                <div class='info'>
                    <img class='info-pic' src='images/icon1.png' alt ="info"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                
                <div class='info'>
                    <img src='images/icon2.png' alt="icon2"></img>
                    <h3>Components</h3>
                    <p>Build encapsulated components to manage their state</p>
                </div>

                <div class='info'>
                    <img src='images/icon3.png' alt="icon3"></img>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's</p>

                </div>

                <div class='info'>
                    <img src='images/icon4.png' alt ="icon4"></img>
                    <h3>JSX</h3>
                    <p>Statically typed design to run on modern browers</p>
                </div>
            </div>  
        );

        return (
            <div class='app'>
                <div class='top'>
                    <nav>
                        {logo}
                        {menu}
                    </nav>
                    {intro}
                </div>

                <div class='bottom'>
                    {infoPics}
                </div>
            </div>
        );
    }
}

export default App;
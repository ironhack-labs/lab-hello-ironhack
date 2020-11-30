import React from 'react';
import './App.css';

//components
import Navbar from './Navbar.js';
import AwesomeButton from './AwesomeButton.js';
import Card from './Card.js';

//class

class App extends React.Component {

    state = {
        card1: { image: "./images/icon1.png", title: "Declarative", text: "React makes it painless to create iteractive UIs"},
        card2: { image: "./images/icon2.png", title: "Components", text: "Build encapsulated components that manage their state"},
        card3: { image: "./images/icon3.png", title: "Single-Way", text: "A set of immutable values that are passed to the component's"},
        card4: { image: "./images/icon4.png", title: "JSX", text: "Statically typed, desinged to run on modern browsers"},
        menuLogo: "./images/menu-top.jpg",
        ironLogo: "./images/ironhack-logo.jfif"
    }

    render() {
        return(
            <div className="App">
                <Navbar logo1={this.state.menuLogo} logo2={this.state.ironLogo}/>
                <h1>Say Hello to ReactJS</h1>
                <h3>You will learn how to use the most popular front-end library, and become a super ninja developer</h3>
                <AwesomeButton/>
                <section>
                    <Card info={this.state.card1}/>
                    <Card info={this.state.card2}/>
                    <Card info={this.state.card3}/>
                    <Card info={this.state.card4}/>
                </section>
            </div>
        )
    }
};



export default App;
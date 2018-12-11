import React, { Component } from 'react'
import '../public/css/style.css'

class App extends Component {
    render(){
        return (
            <div className="mainDiv">
               <nav className="navbar">
                    <div className="left-item">
                        <img src="../images/ironhack-logo.svg" />
                    </div>
                    <div className="right-item">
                        <img src="../images/menu-top.svg" />
                    </div>
               </nav>
               <article className="header">
                <h1>Say hello to ReactJS</h1>
                <p className="subtitle">You will learn a Frontend framework from scratch, to become a Ninja Developer</p>
                <button className="boton">Awesome!</button>
               </article>
               <article className="icons">
                <div className="icon">
                    <img src="../images/icon1.png"/>
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactiva UIs</p>
                </div>
                <div className="icon">
                    <img src="../images/icon2.png"/>
                    <h2>Components</h2>
                    <p>Built encapsulated components that manage their state</p>
                </div>
                <div className="icon">
                    <img src="../images/icon3.png"/>
                    <h2>Single-Way</h2>
                    <p>A set of inmutable values are passed to the components</p>
                </div>
                <div className="icon">
                    <img src="../images/icon4.png"/>
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
               </article>
            </div>
        )
    }
}

export default App
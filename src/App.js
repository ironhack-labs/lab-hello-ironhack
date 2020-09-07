import React, { Component } from "react";
//desestructurar component
import "./App.css";

class App extends Component{
    render(){
        return (
            <main>
            <header className='navBar'>
                <div>
                    <img src='../images/ironhack-logo.svg'></img>
                </div>
                <div>
                    <img src='../images/menu-top.svg'></img>
                </div>
            </header>
            <section className='main'>
                <div>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    <button className='button'>Awesome!</button>
                </div>
            </section>
            <section className='info'>
                <div className='retails'>
                    <img src='../images/icon1.png'></img>
                    <h5>Declarative</h5>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className='retails'>
                    <img src='../images/icon2.png'></img>
                    <h5>Components</h5>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div className='retails'>
                    <img src='../images/icon3.png'></img>
                    <h5>Single-Way</h5>
                    <p>A set of inmutable values are passed to the component's.</p>
                </div>
                <div className='retails'> 
                    <img src='../images/icon4.png'></img>
                    <h5>JSX</h5>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </section>
            </main>
        )
    }
}





export default App;

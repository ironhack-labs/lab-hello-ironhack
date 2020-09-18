import React, { Component } from "react";
import "./App.css";

class App extends Component{
    render(){
        return (
            <div className="page">
                <div className="dark">
                <div className="darkcontent">
                <nav>
                <div className="navcontent">
                    <img src='../images/ironhack-logo.svg'></img>
                    <img src='../images/menu-top.svg'></img>
                </div>
                </nav>
                <main>
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninja Developer.</p>
                    <button className='button'>Awesome!</button>
                    <img className='reactlogo1' src='../images/react-logo.svg'></img>
                    <img className='reactlogo2' src='../images/react-logo.svg'></img>
                    <img className='reactlogo3' src='../images/react-logo.svg'></img>
                    <img className='reactlogo4' src='../images/react-logo.svg'></img>
                    <img className='reactlogo5' src='../images/react-logo.svg'></img>
                    <img className='reactlogo6' src='../images/react-logo.svg'></img>         
                </main>
                </div>
                </div>
                

                <section className='columns'>
                    <div className='column'>
                        <img src='../images/icon1.png'></img>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className='column'>
                        <img src='../images/icon2.png'></img>
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className='column'>
                        <img src='../images/icon3.png'></img>
                        <h2>Single-Way</h2>
                        <p>A set of inmutable values are passed to the component's.</p>
                    </div>
                    <div className='column'> 
                        <img src='../images/icon4.png'></img>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;
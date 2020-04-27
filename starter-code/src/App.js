import React from 'react';
import './App.css'


const App = () => {
    return (
        <div>
            <div className='nav-div'>
                <img src='images/ironhack-logo.svg'className='logo'/> 
                <img src='images/menu-top.svg' className='menu'/> 
            </div>
            <div className='title-container'>
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn a Frontend framework from scratch, to become a Ninka Developer.</p>
                <button>Awesome!</button>
            </div>
            <div className='img-container'>
                <div className='img-div'>
                <img src='images/icon1.png'></img>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div className='img-div'>
                <img src='images/icon2.png'></img>
                <h2>Component</h2>
                <p>Build incapsulated components that manage their state.</p>
                </div>
                <div className='img-div'>
                <img src='images/icon3.png'></img>
                <h2>Single-Way</h2>
                <p>A set of imutable values are passed to the component's.</p>
                </div>
                <div className='img-div'>
                <img src='images/icon4.png'></img>
                <h2>JSX</h2>
                <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    )
}

export default App;
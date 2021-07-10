import React from 'react';
import './App.css';

const App = () => {
    return (
    <div className='App'>
        <div className='Container'>
            <div>
                <img src="../images/ironhack-logo.svg" alt="ironhack-img" />
                <img src="../images/menu-top.svg" alt="menu-img" />
            </div>
            <h1>Say Hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become the Super Ninja developer.</p>
            <button>Awesome!</button>
        </div>
        <div className='Images'>
            <div>
                <img src="../images/icon1.png" alt="icon1-img" />
                <h3>Declarative</h3>
                <p>React makes it painless to creat interactive UIs.</p>
            </div>
            <div>
                <img src="../images/icon2.png" alt="icon2-img" />
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="../images/icon3.png" alt="icon3-img" />
                <h3>Single-way</h3>
                <p>A set of immutable values are passed to component's.</p>
            </div>
            <div>
                <img src="../images/icon4.png" alt="icon4-img" />
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    </div>
    );
}

export default App;
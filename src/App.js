import React from 'react';
import './App.css';


const App = () => {
    return (
        <main>
            <section className='main-sction-container'>
                <div className='navigation'>
                    <img src="../images/ironhack-logo.svg" alt='ironhack logo' />
                    <img src="../images/menu-top.svg" alt='menu top' />
                </div>
                <diuv className='main-content'>
                    <h1>Say Hello to ReactJS</h1>
                    <p>You will learn how to use most popular fronteend library, and become a super Ninja developer.</p>
                    <button>Awesome !</button>
                </diuv>
            </section>
            <section>
                <div>
                    <img src="../images/icon1.png" alt=''/>>
                    <h3>Declarative</h3>
                    <p>React makes it painles to create interactive UIs.</p>
                </div>
                <div>
                    <img src="../images/icon2.png" alt=''/>>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="../images/icon3.png" alt=''/>>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component´s.</p>
                </div>
                <div>
                    <img src="../images/icon1.png" alt=''/>>
                    <h3>JSX</h3>
                    <p>Statically-typed. designed to run on modern browsers.</p>
                </div>
            </section>
        </main>
        )
};

export default App;
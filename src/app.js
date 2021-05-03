import React from 'react';
import './app.css'

const App = () => {
   return (
        <div className="page">
            <div className="top">
                <nav>
                    <div className="logo">
                        <img src="/images/ironhack-logo.svg" />
                    </div>
                    <div className="menu-icon">
                        <img src="/images/menu-top.svg" />
                    </div>
                </nav>
                <header>
                    <div className="text-container">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                        <button>Awesome!</button>
                    </div>
                </header>
            </div>
            <section className="cards">
                <div className="card">
                    <div className="image">
                        <img src="/images/icon1.png" />
                    </div>
                    <div className="text">
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/icon2.png" />
                    </div>
                    <div className="text">
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/icon3.png" />
                    </div>
                    <div className="text">
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src="/images/icon4.png" />
                    </div>
                    <div className="text">
                        <h3>JXS</h3>
                        <p>Statically-typed designed to run on modern browsers.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;
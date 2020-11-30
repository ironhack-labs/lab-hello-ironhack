
import React from "react";
import './app.css';

const App = () => {

    return (
        <div className="App">

            <header className="header">
                <nav className="nav">
                    <div>
                    <img src="/images/ironhack-logo.svg" alt="ironhackLogo" /></div>
                    <div>
                    <img src="/images/menu-top.svg" alt="menuTop" /></div>
                </nav>

                <div className="title">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                    <br/>
                    <button>Awesome!</button>
                </div>
            </header>

            <section className="section">
                <article className="article">
                    <img src="/images/icon1.png" alt="icon1" />
                    <h2>Declarative</h2>
                    <p>React makes it painless to create interactive UIs.</p>
                </article>

                <article className="article">
                    <img src="/images/icon2.png" alt="icon2" />
                    <h2>Components</h2>
                    <p>Build encapsulated components that manage their state.</p>
                </article>

                <article className="article">
                    <img src="/images/icon3.png" alt="icon3" />
                    <h2>Single-Way</h2>
                    <p>A set of immutable values are passed to the component's.</p>
                </article>

                <article className="article">
                    <img src="/images/icon4.png" alt="icon4" />
                    <h2>JSX</h2>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </article>
            </section>

        </div>
    )
}

export default App;
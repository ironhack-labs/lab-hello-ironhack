import React from 'react';

const App = () => {
    return (
        <main>
            <section className="main-section">
                <div className="nav-bar">
                    <img src="/images/ironhack-logo.svg" alt="ironhack-logo"/>
                    <img src="/images/menu-top.svg" alt="menu"/>
                </div>
                <div className="intro">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    <button>Awesome!</button>
                </div>
            </section>
            <section className="info-section">
                <div>
                    <img src="/images/icon1.png" alt="tools"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div>
                    <img src="/images/icon2.png" alt="laptop"/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="/images/icon3.png" alt="desktop"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable variables are passed to the component's.</p>
                </div>
                <div>
                    <img src="/images/icon4.png" alt="code"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>

            </section>
        </main>
    )
  }


export default App;
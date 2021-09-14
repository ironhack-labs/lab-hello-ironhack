import React from 'react';
import './App.css';

function Awesome() {
    alert('Oh no! This button is useless!');
}

function App () {
    return (
        <main className="main">
            
            <section className="top">
                <div className="navbar">
                    <img src="/images/ironhack-logo.svg" alt="ironhack logo"/>
                    <img src="/images/menu-top.svg" alt="menu"/>
                </div>
                <div className="top-text">
                    <h1>Say hello to ReactJS</h1>
                    <p className="headline-text">You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    <button onClick={Awesome}>Awesome!</button>  
                </div>
            </section>

           <section className="bottom">
                    <div>
                        <img src="/images/icon1.png" alt="icon1" />
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>

                    <div>
                        <img src="/images/icon2.png" alt="icon2" />
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>

                    <div>
                        <img src="/images/icon3.png" alt="icon3" />
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>

                    <div>
                        <img src="/images/icon4.png" alt="icon4" />
                        <h3>JSX</h3>
                        <div>Statically-typed, designed to run on modern browsers.</div>
                    </div>
           </section>

        </main>
    )
}

export default App;
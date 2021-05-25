import React from 'react';

const App = () => {
    return (
        <main>
            <section className="main-container">
                <nav>
                    <img src="/lab-generator/public/images/ironhack-logo.svg" alt="ironhack-logo"/>
                    <img src="/public/images/menu-top.svg" alt="ironhack-menu"/>
                </nav>
                <div>
                    <h1> Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                    <button>Awesome!</button>
                </div>             
            </section>
            <section className="section-container">
                <div>
                    <img src="/public/images/icon1.png" alt="icon1"/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs.</p>
                </div>
                <div>
                    <img src="/public/images/icon2.png" alt="icon2"/>
                    <h3>Components</h3>
                    <p>Build encapsuated components that manage their state.</p>
                </div>
                <div>
                    <img src="/public/images/icon3.png" alt="icon3"/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's.</p>
                </div>
                <div>
                    <img src="/public/images/icon4.png" alt="icon4"/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers.</p>
                </div>
            </section>
        </main>
    );
};

export default App;
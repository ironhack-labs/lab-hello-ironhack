import React from 'react';

const App = () =>{
    return (
        <main>
            <section id="header">
                <div class="navbar">
                    <img src="images/ironhack-logo.svg" alt ="Ironhack Logo" />
                    <img src="images/menu-top.svg" alt ="Menu Icon" />
                </div>
                <div class="hero">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super ninja developer.</p>
                    <button>Awesome!</button>
                </div>
            </section>

            <section id="cards-section">
                <div class="cards">
                    <img src="images/icon1.png" alt ="Declarative" />
                    <h3>Declarative</h3>
                    <p>react makes it painless to create interactve UIs</p>
                </div>
                <div class="cards">
                    <img src="images/icon2.png" alt ="Declarative" />
                    <h3>Components</h3>
                    <p>react makes it painless to create interactve UIs</p>
                </div>
                <div class="cards">
                    <img src="images/icon3.png" alt ="Declarative" />
                    <h3>Single-way</h3>
                    <p>react makes it painless to create interactve UIs</p>
                </div>
                <div class="cards">
                    <img src="images/icon4.png" alt ="Declarative" />
                    <h3>JSX</h3>
                    <p>react makes it painless to create interactve UIs</p>
                </div>
            </section>
        </main>
    )
};

export default App;
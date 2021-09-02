import React from 'react';

const App = () => {
    return(
        <main>
        <section>
        <div>
            <img src="../public/images/ironhack-logo.svg" alt="Ironhack Logo"></img>
            <img src="../public/images/menu-top.svg" alt="Ícone de menu"></img>
        </div>

        <div>
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library and become a Super Ninja developer</p>
            <button>Awesome!</button>
        </div>
        </section>

        <section>
        <div>
            <img src="/images/icon1.png" alt="Wrench"></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
            <img src="/images/icon2.png" alt="Wrench"></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
        </div>

        <div>
            <img src="images/icon3.png" alt="Wrench"></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div>
            <img src="/images/icon4.png" alt="Wrench"></img>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
        </section>

        <section>

        </section>
        </main>
        
    );
}; 

export default App;
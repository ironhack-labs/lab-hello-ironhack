
import React from 'react';
import './App.css';
import './index.css';

const App = () => {
  return(
    <div>
    <nav>
        <img src="../images/ironhack-logo.svg" alt="Ironhack Logo"/>
        <img src="../images/menu-top.svg"/>
    </nav>
    <main>
        <h1>Say hello to ReactJS</h1>
        <h3>You will learn a Frontend framework from scratch, to become a Ninja Developer.</h3>
        <button><a href="#">Awesome!</a></button>

    </main>

    <section id="cards">
        <div className="card">
        <img src="../images/icon1.png" alt="Declarative"/>
        <h3>Declarative</h3>
        <p>React makes it painless to create declarative UIs.</p>
        </div>
        <div className="card">
        <img src="../images/icon2.png" alt="Declarative"/>
        <h3>Components</h3>
        <p>Build encapsulated componenets that manage their state.</p>
        </div>
        <div className="card">
        <img src="../images/icon3.png" alt="Declarative"/>
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the componenets.</p>
        </div>
        <div className="card">
        <img src="../images/icon4.png" alt="Declarative"/>
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </section>
      
      

    </div>
  )

};

export default App;
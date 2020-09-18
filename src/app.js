import React from 'react';
import './app.css';

const App = () => {
  return(
    <div>
      <nav>
          <img src="../images/ironhack-logo.svg"></img>
          <img src="../images/menu-top.svg"></img>
      </nav>
      <main className="main-text" >
        <h1 className='app'>Say Hello to ReactJs</h1>
        <h2 className='header'> You will learn a FrontEnd framework from scratch, to become a Ninja Developer</h2>
        <button>Awesome!</button>
      </main>
      <section className="container">
            <div className="box">
              <img src="../images/icon1.png" alt="Declarative"/>
              <h4 className= "box-heading">Declarative</h4>
              <p>React makes it painless to create interactive UIS</p>
            </div>
            <div className="box">
              <img src="../images/icon2.png" alt="Declarative"/> 
              <h4 className= "box-heading">Components</h4>
              <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="box">
              <img src="../images/icon3.png" alt="Declarative"/>
              <h4 className= "box-heading">Single-Way</h4>
              <p>A set of inmutable values are passed to the components</p>
            </div>
            <div className="box">
              <img src="../images/icon4.png" alt="Declarative"/>
              <h4 className= "box-heading">JSX</h4>
              <p>Statically typed,designed to run on modern browsers</p>
            </div>
      </section>
 </div>
  )
};

export default App;

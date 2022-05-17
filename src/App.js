import React from 'react'; 
import "./style.css";

const App = () => {

  return (
      <div>
      <div className="bcg-react">
      <div className="nav-bar">
      <img src="./images/ironhack-logo.svg" alt="IronHack-Logo" className='img-bcg-react'></img>
      <img src="./images/menu-top.svg" alt="Menu"></img>
      </div>
      <div className="intro">
        <h1 className="app">Say hello to<br></br> ReactJS</h1>
        <p>You will learn how to use<br></br> the most popular fronend library, <br></br>and become a super Ninja Developer.</p>
        <button><b>Awesome!</b></button>
        </div>
        </div>
        <div className='display'>
            <section className='items'> 
                <img src="./images/icon1.png" alt="Declarative"></img> 
                <h3>Declarative</h3>
                <p>React makes it <br></br> painless to create <br></br> interactive UIs</p>           
                </section>
                <section className='items'> 
                <img src="./images/icon2.png" alt="Components"></img> 
                <h3>Components</h3>
                <p>Build encapsulated <br></br> Components that <br></br>manage their state.</p>           
                </section>
                <section className='items'> 
                <img src="./images/icon3.png" alt="Single-Way"></img> 
                <h3>Components</h3>
                <p>A set of immutable<br></br> values are passed to<br></br> the component's</p>           
                </section>
                <section className='items'> 
                <img src="./images/icon4.png" alt="JSX"></img> 
                <h3>JSX</h3>
                <p>Statically-typed, <br></br>designed to run on<br></br> modern browsers</p>           
                </section>
            </div>

      </div>

  ) 

};
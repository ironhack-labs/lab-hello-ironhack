import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";

const main = (
   <div className='container'>
       <nav>
       <img src='images/ironhack-logo.svg'></img>
       <img src='images/menu-top.svg'></img>
       </nav>
       <section className='section1'>
           <h1>Say hello to ReactJS</h1>
           <article>
               You will learn how to use the most popular frontend library, and become a super Ninja developer.
           </article>
           <a href='#'>Awesome!</a>
       </section>
       <section className='section2'>
           <div className='box'>
            <img src='images/icon1.png' />
                <div>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
           </div>
           <div className='box'>
            <img src='images/icon2.png' />
                <div>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state</p>
                </div>
           </div>
           <div className='box'>
            <img src='images/icon3.png' />
                <div>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the component's</p>
                </div>
           </div>
           <div className='box'>
            <img src='images/icon4.png' />
                <div>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>
           </div>

       </section>
   </div>
)


ReactDOM.render(main, document.querySelector('#root'));
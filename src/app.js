// jshint esversion:8

import React from 'react';

import menuTop from './menu-top.svg';
import ironhackLogo from './ironhack-logo.svg';
import reactLogo from './react-logo.svg';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';

const imageMenuTop = <img src={menuTop} alt="menu top" />;
const logo = <img src={ironhackLogo} alt="logo" />;
const iconOne = <img src={icon1} alt="icon declarative" />;
const iconTwo = <img src={icon2} alt="icon components" />;
const iconThree = <img src={icon3} alt="icon single-way" />;
const iconFour = <img src={icon4} alt="icon jsx" />;

const App = () => {

    return (
        <div className="App">

            <section id='top'>
                <nav id='navbar'>
                    {logo}
                    {imageMenuTop}
                </nav>

                <h1>Say hello to <br/>ReactJS</h1>

                <p>You will learn how to use<br/> 
                the most popular frontend library,<br/> 
                and become a super Ninja developer.</p>
            
                <button>Awesome!</button>
            </section>

            <section id='down'>
                <div>
                    {iconOne}
                    <h2>Declarative</h2>
                    <p>React makes it <br/>
                    painless to create <br/>
                    interactive Uls.</p>
                </div>
                <div>
                    {iconTwo}
                    <h2>Components</h2>
                    <p>Build encapsulated <br/>components that <br/>manage their state.</p>
                </div>
                <div>
                    {iconThree}
                    <h2>Single-Way</h2>
                    <p>A set of immutable <br/>values are passed to <br/>
                    the component's.</p>
                </div>
                <div>
                    {iconFour}
                    <h2>JSX</h2>
                    <p>Statically-typed, <br/>
                    designed to run on <br/>
                    modern browsers</p>
                </div>
            </section>
        </div>
    );

};

export default App;
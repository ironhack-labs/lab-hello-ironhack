import React from 'react';
import './App.css';

const App = () => {
    return (
    <div className='App'>
        <div className='Container'>
            <div id='nav-bar'>
                <img src="../images/ironhack-logo.svg" alt="ironhack-img" id='ironhack-img'/>
                <img src="../images/menu-top.svg" alt="menu-img" id='menu-img' />
            </div>
            <div id="title-div">
                <div id="text-div">
                    <h1 id='title'>Say hello to <br/>
                    ReactJS</h1>
                    <p id='paragraph'>You will learn how to use <br/>
                        the most popular frontend library, <br/>
                        and become the Super Ninja developer.</p>
                    <button id='button'>Awesome!</button>
                </div>
            </div>
        </div>
        <div className='Images'>
            <div>
                <img src="../images/icon1.png" alt="icon1-img" />
                <h3>Declarative</h3>
                <p>React makes it <br/>
                painless to creat <br/>
                interactive UIs.</p>
            </div>
            <div>
                <img src="../images/icon2.png" alt="icon2-img" />
                <h3>Components</h3>
                <p>Build encapsulated <br/>
                components that <br/>
                manage their state.</p>
            </div>
            <div>
                <img src="../images/icon3.png" alt="icon3-img" />
                <h3>Single-way</h3>
                <p>A set of immutable <br/>
                values are passed to <br/>
                the component's.</p>
            </div>
            <div>
                <img src="../images/icon4.png" alt="icon4-img" />
                <h3>JSX</h3>
                <p>Statically-typed, <br/>
                designed to run on <br/>
                modern browsers.</p>
            </div>
        </div>
    </div>
    );
}

export default App;
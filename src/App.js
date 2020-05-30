import React, { Component } from 'react';
import './App.css';

export default /* <---- another way to export saving a line at the end */class App extends Component {
    render() {
        const header = () => {
            return (
                <div className="header">
                    <img src='/images/ironhack-logo.svg' id="logo"/>
                    <img src='/images/menu-top.svg' id="menu"/>
                </div>
            );
        };

        const article = () => {
            return (
                <div className="caption">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become an Ninka Developer.</p>
                    <a src="#">Awesome!</a>
                </div>
            );
        };

        return (
            <div className='App'>
                <div className='top'>
                    {header()}
                    {article()}
                </div>
{/* ===================================== There must be an easy way to do this ===================================== */}
                <div className='bottom'>
                    <div className='theCard'>
                        <img src='/images/icon1.png' />
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className='theCard'>
                        <img src='/images/icon2.png' />
                        <h2>Components</h2>
                        <p>Build encapsulated components that manage their state.</p>
                    </div>
                    <div className='theCard'>
                        <img src='/images/icon3.png' />
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the components.</p>
                    </div>
                    <div className='theCard'>
                        <img src='/images/icon4.png' />
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
{/* ====== We shouldn't have to repeat the same structure each time we need to use it with a diferent content ====== */}
            </div>
        );
    }
};

// export default App;
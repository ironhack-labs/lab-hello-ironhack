import React from 'react';
import ReactDOM from 'react-dom';

const pStyle = {
    width: '150px'
}

const block = (
    <div>
        <div style={{
            backgroundColor: '#1f2535',
            color: 'white'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '30px'
            }}>
                <img src="images/ironhack-logo.svg" alt="Ironhack logo"></img>
                <img src="images/menu-top.svg" alt="menu icon"></img>
            </div>
            <div style={{
                padding: '30px'
            }}>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
        </div>
        <div style={{
            display: "flex",
            padding: '50px',
            gap: '70px'
        }}>
            <div>
                <img src="images/icon1.png" alt=""></img>
                <h3>Declarative</h3>
                <p style={pStyle}>React makes it painless to create interactive UIs.</p>
            </div>
            <div>
                <img src="images/icon2.png" alt=""></img>
                <h3>Components</h3>
                <p style={pStyle}>Build encapsulated components that manage their state.</p>
            </div>
            <div>
                <img src="images/icon3.png" alt=""></img>
                <h3>Single-Way</h3>
                <p style={pStyle}>A set of immutable values are passed to the component's.</p>
            </div>
            <div>
                <img src="images/icon4.png" alt=""></img>
                <h3>JSX</h3>
                <p style={pStyle}>Statically-type, designed to run on modern browsers.</p>
            </div>
        </div>
    </div>
)

ReactDOM.render(block, document.getElementById('root'))
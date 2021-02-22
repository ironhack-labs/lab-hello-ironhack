import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

const h1 = 'Say hello to React JS'
const p = 'You will learn how to use the most popular frontend library, and become a super Ninja developer'
const button = 'Awesome!'

const frontPage = (
    <div className="main">
    <img className="i-logo" src="./images/ironhack-logo.svg" />
        <h1>{h1}</h1><br />
        <p>{p}</p><br />
        <button className="btn">{button}</button><br />
        <img className="i-sec" src="./images/icon1.png" />
        <img className="i-sec" src="./images/icon2.png" />
        <img className="i-sec" src="./images/icon3.png" />
        <img className="i-sec" src="./images/icon4.png" />
    </div>
)

ReactDOM.render(frontPage, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const navBar = (
    <nav>
    <img class="logo" src="../images/ironhack-logo.svg"/>
    <img src="../images/menu-top.svg"/>
    </nav>
)

const greeting = (
<div> 
    <h1>Say Hello to ReactJS</h1>
    <p>You will learn a FrontEnd framework from scratch, to become a Ninka Developer.</p>
    <button>Awesome!</button>
</div>
)

const reactLogo = (
    <img src="../images/react-logo.svg"/>
)

const body = (
    <div>
        {navBar}
        {greeting}
        {reactLogo}
    </div>
)

ReactDOM.render(
    body,
    document.getElementById('root')
)
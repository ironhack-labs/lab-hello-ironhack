import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const element = (
    
    <div>
        <nav class="navbar backgroundcolor">
            <img src="./images/ironhack-logo.svg" alt="ironhack logo"/>
            <img src="./images/menu-top.svg" alt="top menubar"/>
        </nav>

        <section class="header backgroundcolor">

            <div class="headerText">
                <h1>Say hello to ReactJS</h1>
                <p class="headerTextText">You will learn how to use the most popular frontend libray and become a super Ninja developer</p>
                <button><p>Awesome!</p></button>   
            </div>

            <div class="headerBackgroundImages">                
                <img src="./images/react-logo.svg" alt="react-logo"/> 
                <img src="./images/react-logo.svg" alt="react-logo"/> 
                <img src="./images/react-logo.svg" alt="react-logo"/> 
            </div>


        </section>

        <section class = "iconAndText"> 
            <div class="iconContainer">
                <img src="./images/icon1.png" alt="icon with a wrench with nut"/>
                <h2>Declarative</h2>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div class="iconContainer">
                <img src="./images/icon2.png" alt="icon with a computer"/>
                <h2>Components</h2>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div class="iconContainer">
                <img src="./images/icon3.png" alt="icon with a monitor"/>
                <h2>Single-way</h2>
                <p>A set of immutable values are passed to the components</p>
            </div>
            <div class="iconContainer">
                <img src="./images/icon4.png" alt="icon with a  popup"/>
                <h2>JSX</h2>
                <p>Statically-typed. Designed to run on modern browsers</p>
            </div>
        </section>

    </div>
    
)




ReactDOM.render(
    element,
    document.getElementById('root')
)
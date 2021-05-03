import React from 'react';
import Sections from './Sections';
import './App.css';

const App = () => {
    return (
        <div className='fullpage'>
            <div className="topDiv">
                <div className="navbar">
                    <img src='/public/images/ironhack-logo.svg' alt="Logo" />
                    <img src='/public/images/menu-top.svg' alt='menu-top' />
                </div>
                <h1>Say hello to <br/> ReactJS</h1>
                <p>You will learn how to use<br/>the most popular frontend library,<br/>and become a super Ninja developer.</p>
                <a src='#'>Awesome!</a>
            </div>
            <div className='bottomDiv'>
                <Sections sectionImg='/public/images/icon1.png' sectionTitle='Declarative' sectionText='React makes it painless to create interactive UIs.'/>
                <Sections sectionImg='/public/images/icon2.png' sectionTitle='Components' sectionText='Build encapsulated components that manage their state.'/>
                <Sections sectionImg='/public/images/icon3.png' sectionTitle='Single-Way' sectionText='A set of immutable values are passed to the components.'/>
                <Sections sectionImg='/public/images/icon4.png' sectionTitle='JSX' sectionText='Statically-typed, designed to run on modern browsers.'/>
            </div>
        </div>
    )
}

export default App;
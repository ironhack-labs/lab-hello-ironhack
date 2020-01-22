import React, { Component } from "react";
import "./App.css";

class App extends Component {

    render() {
        const reactLogo = '/images/react-logo.svg'
        return (
            <div className='container'>
                <div className="navBar">
                    <img src='/images/ironhack-logo.svg' alt='ironhack logo'></img>
                    <img src='/images/menu-top.svg' alt='menu logo'></img>
                </div>
                <div className='banner'>
                    <div className='bannerText'>
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a frontend framework from scratch, to become a ninja developer</p>
                        <div className='button'>Awesome!</div>
                    </div>
                    <div className='bannerImage'>
                        <img src={reactLogo} alt='react logo'></img>
                        {/* <img src='/images/react-logo.svg' alt='react logo'></img>
                        <img src='/images/react-logo.svg' alt='react logo'></img>
                        <img src='/images/react-logo.svg' alt='react logo'></img>
                        <img src='/images/react-logo.svg' alt='react logo'></img>
                        <img src='/images/react-logo.svg' alt='react logo'></img> */}
                    </div>
                </div>
                <div className='features'>
                    <div className='feature'>
                        <img src='/images/icon1.png' alt='feature Image'></img>
                        <h2>Declarative</h2>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>
                    <div className='feature'>
                        <img src='/images/icon2.png' alt='feature Image'></img>
                        <h2>Components</h2>
                        <p>Build encampsulated components that manage their state</p>
                    </div>
                    <div className='feature'>
                        <img src='/images/icon3.png' alt='feature Image'></img>
                        <h2>Single-Way</h2>
                        <p>A set of immutable values are passed to the component's</p>
                    </div>
                    <div className='feature'>
                        <img src='/images/icon4.png' alt='feature Image'></img>
                        <h2>JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
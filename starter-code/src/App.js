import React, { Component } from 'react';
import './App.css';

const icon1 = '/images/icon1.png';
const icon2 = '/images/icon2.png';
const icon3 = '/images/icon3.png';
const icon4 = '/images/icon4.png';

const ihLogo = '/images/ironhack-logo.svg';
const reactLogo = '/images/react-logo.svg';
const menuBarImage = '/images/menu-top.svg';

class App extends Component {
    render() {
        return (
            <div className = 'App'>
                <main>
                <nav className="nav-images">
                <img src="/images/ironhack-logo.svg" alt="" />
                <img src="/images/menu-top.svg" alt="" />
                </nav>

                <div className="text">
                    <h1>Say Hello to ReactJS</h1>
                    <p>You will learn a Frontend framework from scratch, to become a Ninka Developmer</p>
                    <button>Awesome</button>
                </div>
                <div className="icons">
                    <img src="/images/icon1.png" />
                </div>
                <div className="icons">
                <img src="/images/icon2.png" />
                </div>
                <div className="icons">
                <img src="/images/icon3.png" />
                </div>
                <div className="icons">
                <img src="/images/icon4.png" />
                </div>
            </main>
         
            </div>
        )
    }
}

export default App;
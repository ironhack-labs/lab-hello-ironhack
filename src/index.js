import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

const mydiv = (
    <div className="main">
        <nav>
            <div>
                <img src="/images/ironhack-logo.svg" />
            </div>
            <div>
                <img src="/images/menu-top.svg" />
            </div>
        </nav>
        <div>
            <h1>Say hello to <br></br>ReactJs</h1>
            <p>You will lern a Frontend <br></br>
            framework from scratch, to <br></br>
            become an Ninja Developer.</p>
        </div>
        <button>Awesome!</button>
    </div>

);


ReactDOM.render(mydiv, document.getElementById('root'))
import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

const mydiv = (
    <div className="main">
        <section>
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
        </section>

        <div className="boxes">
            <div className="component">
                <img src="/images/icon1.png" />
                <h4>Declarative</h4>
                <p>React makes it <br></br>painless to create <br></br>interactive UIS.</p>
            </div>
            <div className="component">
                <img src="/images/icon2.png" />
                <h4>Components</h4>
                <p>Build encapsulated <br></br>components that <br></br>manage their state.</p>
            </div>
            <div className="component">
                <img src="/images/icon3.png" />
                <h4>Single-Way</h4>
                <p>A set of immutable <br></br>values are passed to <br></br>the component's.</p>
            </div>
            <div className="component">
                <img src="/images/icon1.png" />
                <h4>JSX</h4>
                <p>Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
            </div>
        </div>
    </div>

);


ReactDOM.render(mydiv, document.getElementById('root'))
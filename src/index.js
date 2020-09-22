import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const myStyle = {
    color: "white"
};

const element = (
    <div>
        <div className="main">
            <nav className="nav-bar"> 
                <img src={"../images/ironhack-logo.svg"}/>
                <img src={"../images/menu-top.svg"}/>
            </nav>

            <div>
                <h1 style={myStyle}>
                Say hello to
                <br/>
                ReactJS
                </h1>
            </div>

            <div>
                <p style={myStyle} className="subtitle">
                You will learn a Frontend
                <br/>
                framework from scratch, to
                <br/>
                become an Ninja Developer.
                </p>
            </div>

            <div className="btn-div">
                <button>Awesome!</button>
            </div>
        </div>

        <div className="container">
            <div>
                <img src={"../images/icon1.png"}/>
                <h3>Declarative</h3>
                <p className="textcard">React makes it
                <br/>
                painless to create
                <br/>
                interactive UIs.
                </p>
            </div>

            <div>
                <img src={"../images/icon2.png"}/>
                <h3>Components</h3>
                <p className="textcard">Build encapsulated
                <br/>
                components that
                <br/>
                manage their state.
                </p>
            </div>

            <div>
                <img src={"../images/icon3.png"}/>
                <h3>Single-Way</h3>
                <p className="textcard">A set of immutable
                <br/>
                values are passed to
                <br/>
                the component's.</p>
            </div>

            <div>
                <img src={"../images/icon4.png"}/> 
                <h3>JSX</h3>  
                <p className="textcard">Statically-typed,
                <br/>
                designed to run on
                <br/>
                modern browsers.</p>
            </div>
        </div>
    </div>
);



ReactDOM.render(
    element,
    document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


const myStyle = {
    color: 'white',
}

const element = (
    <div>
        <nav>
            <img className="navImg1" src={"../images/ironhack-logo.svg"}/>
            <img className="navImg2" src={"../images/menu-top.svg"}/>
        </nav>
        <div className="container1">
            <h1 style = {myStyle}>Say Hello to <br/> ReactJS</h1>
            <p id="parrafo" style={myStyle}>You will learn a Frontend<br/>
            framework from scratch, to<br/>
            become a Ninja Developer</p>
            <button >Awesome!</button>
        </div>
        
        <div className="container">
            <div className="boxes">
                <img src={"../images/icon1.png"}/>
                <h3>Declarative</h3>
                <p>React makes it painless to create iteractive UIs.</p>
            </div>
            <div className="boxes">
                <img src={"../images/icon2.png"}/>
                <h3>Components</h3>
                <p>Build encapsulated components that manage their state</p>
            </div>
            <div className="boxes">
                <img src={"../images/icon3.png"}/>
                <h3>Single-Way</h3>
                <p>A set of immutable values are passed to the component's</p>
            </div>
            <div className="boxes">
                <img src={"../images/icon4.png"}/>
                <h3>JSX</h3>
                <p>Statically-typed, designed to run on modern browsers</p>
            </div>
        </div>
    </div>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);
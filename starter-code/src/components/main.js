import React from 'react';
import "../stylesheets/main.scss";
import Nav from "./nav";

function Main(){
    return(
        <div className="main">
            <Nav />
            <div className="main-content">
                <h1>Say Hello to React JS</h1>
                <p className="text-secondary">You will learn a Frontend Framework from scratch, to become a Ninja Developer</p>
                <a className="btn btn-light text-dark font-weight-bold lead">Awesome!</a>
            </div>
        </div>
    )
}

export default Main
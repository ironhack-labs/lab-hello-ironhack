import React, { Component } from 'react';
import "./App.css";
import MyLogo from "./MyLogo";
import MyNavBar from "./MyNavBar";
import MyIcon from "./MyIcon";

const App = () => {
    return (
        <div>
            <div className="mainPage"
            style={{
                backgroundColor: ('midnightblue'),
                width: '100wh',
                height: '96vh'}}
                >
                <MyNavBar url="images/ironhack-logo.svg" url2="images/menu-top.svg"></MyNavBar>
                <div className="holder">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a Frontend Framework from scratch, to become a Ninja Developer.</p>
                </div>
                <button>Awesome!</button>
            </div>

            <div className="iconHolder">
                <MyIcon url="images/icon1.png" title="Declarative" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad cumque consequatur nesciunt consequuntur"
                ></MyIcon>
                <MyIcon url="images/icon2.png" title="Components" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad cumque consequatur nesciunt consequuntur"></MyIcon>
                <MyIcon url="images/icon3.png" title="Single-Way" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad cumque consequatur nesciunt consequuntur"></MyIcon>
                <MyIcon url="images/icon4.png" title="JSX" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad cumque consequatur nesciunt consequuntur"></MyIcon>
            </div>
        </div>
    )
}

export default App

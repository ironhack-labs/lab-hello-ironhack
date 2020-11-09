import React, { Component } from "react";
import './Main.css';


class Main extends Component {

    render() {

        return (
            <div className='main'>
                <div className='nav'>
                    <img src='/images/ironhack-logo.svg' />
                    <img src='/images/menu-top.svg' />
                </div>
                <div className='call-action'>
                    <h1> Say hello to ReactJS</h1>
                    <div className='ps'>
                        <p>You will learn how to use</p>
                        <p>the most popular frontend library,</p>
                        <p>and become a super Ninja developer.</p>
                    </div>
                    <button>Awersome!</button>
                </div>
            </div>
        );
    }
}



export default Main; 
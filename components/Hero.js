import React, { Component } from 'react'
import Button from './Button.js'

class Hero extends Component {
    render() {
        return (
            <div className="hero-box">
                <div className="nav-bar">
                    <div><img src="/images/ironhack-logo.svg"></img></div>
                    <div><img src="/images/menu-top.svg"></img></div>
                </div>
                <div className="text-box">
                    <p className="p1">Say hello to <br/>ReactJS</p>
                    <p className="p2">You will learn a FrontEnd<br/>framework from scratch, to<br/>become a Ninja Developer</p>
                </div>
                <div className="button">
                    <Button buttonLinks="https://reactjs.org/tutorial/tutorial.html"
                            buttonAction="Awesome!"
                    />
                </div>
            </div>
        )
    }
}

export default Hero
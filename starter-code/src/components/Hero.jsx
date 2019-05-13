import React, { Component } from 'react';
import Navbar from "./Navbar"

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Navbar />
                <div className="title-container">
                    <h1 className="title">Say hello to ReactJS</h1>
                </div>
                <div className="subtitle-container">
                    <p>You will learn a Frontend
                        framework from scratch, to
                    become an Ninka Developer.</p>
                    <button>Awesome!</button>
                </div>


            </div>);
    }
}

export default Hero;

import React, {Component} from 'react';
import './PageTop.css'
// import PageBottom from './PageBottom'

class Top extends Component {
    render() {
        return (
            <div  className="main">
                <nav className="nav">
                    <img src="images/ironhack-logo.svg" alt="ironhack logo"/>
                    <img src="images/menu-top.svg" alt="menu logo"/>
                </nav>
                <div className="main-text">
                    <h1>Say hello to ReactJS</h1>
                    <p>You will learn a frontend framework from scratch to become a ninja developer</p>
                    <button className="btn">Awesome!</button>
                </div>
            </div>
        )
    }
}

export default Top;
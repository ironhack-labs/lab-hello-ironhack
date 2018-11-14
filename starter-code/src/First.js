import React, {Component} from 'react';
import './First.css';

class First extends Component{
    render(){
        return (
            <header className='header'>
                <nav className='nav'>
                    <img src="images/ironhack-logo.svg"></img>
                    <img src="images/menu-top.svg"></img>
                </nav>
                <div className='content'>
                    <h1>Say hello to ReactJS</h1>
                    <img src="images/react-logo.svg"></img>
                    <p>You will learn a Frontend framework from scratch, to became a Ninja Developer</p>
                    <button>Awesome!</button>
                </div>
            </header>
        )
    }
}

export default First;
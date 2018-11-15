import React, {Component} from 'react';
import './First.css';

class First extends Component{
    render(){
        return (
            <header className='header'>
                <nav className='navbar'>
                    <img src="images/ironhack-logo.svg"></img>
                    <img src="images/menu-top.svg"></img>
                </nav>
                <div className='content'>
                    <div>
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn a Frontend framework from scratch, to became a Ninja Developer</p>
                        <button className='button'>Awesome!</button>
                    </div>
                    <div>
                        <img src="images/react-logo.svg"></img>
                    </div>
                </div>
            </header>
        )
    }
}

export default First;
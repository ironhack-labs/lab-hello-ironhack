import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <div className='app'>
                 <img src="images/ironhack-logo.svg" className="ironlogo"></img>
                 <img src="images/menu-top.svg" className="menupic"></img>
                <h1 className="hello">Say Hello to<br></br> ReactJS</h1>
                <h2 className="text">You will learn a Frontend framework from scratch, <br></br> to become a Ninja Developer</h2>
                <button className="button button1">Awesome</button>
            </div>
        )
    }
}

export default Header;

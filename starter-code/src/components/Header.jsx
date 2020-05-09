import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
            <div className="head-elements">
                    <img src="/images/ironhack-logo.svg"></img>
                    <img src="/images/menu-top.svg"></img>
            </div>
            <div className="container">
                    <h1>Say Hello to ReactJS</h1>
                    <h3>Your will learn a Frontend<br />framework from scratch, to<br />become a Ninka developer</h3>
            </div>
            <button type="button" class="button">Awesome!</button>
            
            </div>
            
        )
    }
}

export default Header

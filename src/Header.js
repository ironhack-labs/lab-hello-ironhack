import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={this.props.image}></img>
                <h1>Say hello to ReactJS</h1>
                <h4>You will learns how to use the most popular fronend library, and become a super Ninja developer</h4>
                <p>Awesome!</p>
            </div>
        )
    }
}

export default Header;

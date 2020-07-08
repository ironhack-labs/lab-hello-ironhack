import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={this.props.logoImg} />
                <img src={this.props.menuImg} />
            </div>
        )
    }
}

export default Navbar;
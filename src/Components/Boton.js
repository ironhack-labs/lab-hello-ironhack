import React, { Component } from 'react'

class Boton extends Component {
    render() {
        return (
        <button className="awesomeBtn">
            {this.props.children}
        </button>
        )
    }
}

export default Boton

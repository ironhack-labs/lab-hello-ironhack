import React, { Component } from 'react'

class Button extends Component {
    render() {
        return (
            <div className="button-div">
                <button className="button" href={this.props.buttonLinks}>{this.props.buttonAction}</button>
            </div>
        )
    }
}

export default Button
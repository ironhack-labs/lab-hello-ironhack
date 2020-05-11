import React, { Component } from 'react'

export class MyComponent extends Component {
    render() {
        return (
            <div>
                <img src={`/images/${this.props.imag}`} alt=""/>
                <h4> {this.props.desc} </h4>
                <p>lorem ipsum</p>
            </div>
        )
    }
}

export default MyComponent

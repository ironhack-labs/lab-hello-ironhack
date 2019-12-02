import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
        <a className='button' href="#">{this.props.action}</a>
        )
    }
}
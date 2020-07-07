import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <li>
                <img src={this.props.pic}></img>
                <h4>{this.props.title}</h4>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

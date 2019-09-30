import React, { Component } from 'react'
import "./Item.css";

export default class Item extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="item">
                <img src={this.props.image}></img>
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

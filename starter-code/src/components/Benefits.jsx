import React, { Component } from 'react'
import './Benefits.css'

export default class Benefits extends Component {
    render() {
        return (
            <div className="benefit">
                <img className="image-benefit" src={this.props.image} alt="" />
                <h3 className="title-benefit">{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

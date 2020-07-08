import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.cardImage}/>
                <p className="card-title">{this.props.cardTitle}</p>
                <p className="card-body">{this.props.cardBody}</p>
            </div>
        )
    }
}


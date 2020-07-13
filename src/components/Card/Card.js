import React, { Component } from 'react'

import './Card.css'


class Card extends Component {

    render() {

        return (
            <article className="Card">
                <h3>{this.props.name}</h3>
                <p>{this.props.texto}</p>
                <img>{this.props.img}</img>
            </article>
        )
    }
}

export default Card
import React, { Component } from 'react'
import './card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <img src={this.props.cardImage}/>
                <p className="titulo">{this.props.cardTitle}</p>
                <p className="texto">{this.props.cardBody}</p>
            </div>
        )
    }
}

export default Card
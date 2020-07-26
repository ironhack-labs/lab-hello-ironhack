import React, { Component } from 'react'
import '../app.css'

 class Card extends Component {
    render() {
        return (
            <div className="ironCard">
                <div>
                    <img src={this.props.cardImg}/>
                </div>
                <p className="cardTitle">{this.props.cardTitle}</p>
                <p className="textoCard">{this.props.cardBody}</p>
            </div>
        )
    }
}

export default Card

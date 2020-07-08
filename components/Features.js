import React, { Component } from 'react'
import Card from './Card.js' 

const cards = [{cardTitle: 'Declarative',
                cardBody: 'React makes it painless to create interactive UIs',
                cardImg: '/images/icon1.png'},
                {
                cardTitle: 'Components',
                cardBody: 'Build encapsulated components that manage their state',
                cardImg: '/images/icon2.png'
                },
                {
                cardTitle: 'Single-Way',
                cardBody: 'A set of mutable values are passed to the components',
                cardImg: '/images/icon3.png'
                },
                {
                cardTitle: 'JSX',
                cardBody: 'Statically-tuped, designed to run on modern browsers',
                cardImg: '/images/icon4.png'
                }
            ];


class Features extends Component {
    render() {
        return (
            <div className="features-box">
                { cards.map(card => <Card cardTitle={card.cardTitle} cardBody={card.cardBody} cardImg={card.cardImg} />)}
            </div>
        )
    }
}

export default Features
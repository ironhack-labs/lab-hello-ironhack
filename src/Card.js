import React, { Component } from 'react';
import './App.css';

class Card extends Component {
    render() {
        const cards = [
            {
                imgSrc: '/public/images/icon1.png',
                h2: 'Declarative',
                p: 'React makes it painless to create interactive UIs.'
            },
            {
                imgSrc: '/public/images/icon2.png',
                h2: 'Components',
                p: 'Build encapsulated components that manage their state.'
            },
            {
                imgSrc: '/public/images/icon3.png',
                h2: 'Single-Way',
                p: 'A set of immutable values are passed to the components.'
            },
            {
                imgSrc: '/public/images/icon4.png',
                h2: 'JSX',
                p: 'Statically-typed, designed to run on modern browsers.'
            }
        ];

        const showCard = (cards) => {
            cards.forEach(card => {
                console.log(card.imgSrc);
                console.log(card.h2);
                console.log(card.p);
                return (
                    <div className='eachCard'>
                        <img src={card.imgSrc} />
                        <h2>{card.h2}</h2>
                        <p>{card.p}</p>
                    </div>
                );
            });
        }

        return (
            <div className='Card'>
                {showCard(cards)}
            </div>
        );
    }
}

export default Card;
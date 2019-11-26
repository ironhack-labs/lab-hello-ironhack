import React from 'react'
import './CardItems.css'
//Images imports
// const cardIcon1 = '/images/icon1.png'

export default function CardItems({ cardIcon, cardTitle, cardText }) {
    return (
        <div className="card-block">
            <img src={cardIcon} alt="" />
            <h3>{cardTitle}</h3>
            <p>{cardText}</p>
        </div>
    )
}

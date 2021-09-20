import React from 'react'
import { CardContainer } from './Card.styled'

export default function Card({ cardImage, title, description }) {
    return (
        <CardContainer>
            <img src={cardImage} alt="icon1" />
            <h2>{title}</h2>
            <p>{description}</p>
        </CardContainer>
    )
}

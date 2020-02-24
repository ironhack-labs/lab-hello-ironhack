import React from 'react'
import './Card.css'

const Card = ({ src, title, content }) => {
    return (
        <section className="card">
            <img src={src} />
            <header>
                <h2>{title}</h2>
            </header>
            <p>{content}</p>
        </section>
    )
}

export default Card
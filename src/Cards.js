import React from "react";
import "./Cards.css"

const Cards = ({cardImage, cardTitle, cardText}) => {
    return (
        <div className="card">
            <img src={cardImage}></img>
            <h2>{cardTitle}</h2>
            <p>{cardText}</p>
        </div>
    )
}

export default Cards;
import React from 'react'
import '../src/App.css'

function Card(props) {

    return (
        <article className="card">
            <img className="card-image" src={props.iconImage} alt="" />  
            <h2>{props.titleText}</h2>
            <p>{props.descriptionText}</p>
        </article>
    )
}

export default Card
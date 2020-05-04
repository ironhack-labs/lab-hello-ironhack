import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    return (

        <article>
            <img src={props.imgSource} alt={props.imgAlt}/>
            <h2> { props.cardTitle } </h2>
            <p> { props.cardText } </p>
        </article>
            
    )
}

export default Card;

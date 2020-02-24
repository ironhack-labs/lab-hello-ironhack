import React from 'react'
import './cards.css'

const Cards= props=>{
    return(
        <article className='cards'>
        <img src={props.image}></img>
        <h5>{props.title}</h5>
        <p>{props.text}</p>

        </article>
    )
}

export default Cards
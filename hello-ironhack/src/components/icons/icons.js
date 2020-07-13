import React from 'react'
import './icons.css'

const Icons = props => {

    return (

        <article className="article">
            <img src={props.img}></img>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </article>
    )
}

export default Icons
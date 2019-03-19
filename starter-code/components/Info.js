import React from 'react'

function Info(props) {

    return (
        <article className="individual-info">
            <img src={props.avatar} alt={props.title}></img>
            <h2>{props.title}</h2>
            <p className="individual-description">{props.description}</p>
        </article>
    )
}

export default Info
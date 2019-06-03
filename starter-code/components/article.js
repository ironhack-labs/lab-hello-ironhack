import React from 'react'

const Article = props =>
    <article>
        <figure>
            <img src={props.icon} />
        </figure>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </article>


export default Article
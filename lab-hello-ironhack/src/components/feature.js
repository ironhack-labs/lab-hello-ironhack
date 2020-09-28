import React from 'react'

const Feature = props => {

    return (
        <article className='feature'>

            <img src={props.imageSrc} alt={props.altText} />

            <h2>{props.title}</h2>
            <p>{props.text}</p>

        </article>
    )
}

export default Feature
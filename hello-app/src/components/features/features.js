import React from 'react'

import './features.css'

const Features = props => {

    return (
        <article className="featureDesign">
            <img src={props.image} alt={props.articleTitle} />
            <h3>{props.articleTitle}</h3>
            <p>{props.articleParagraph}</p>
        </article>
    )
}

export default Features
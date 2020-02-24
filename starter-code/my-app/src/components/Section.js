import React from 'react';


const Article = props => {
    return (
        <article>
            <img src={props.icon} />
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
        </article>
    )
}

export default Article
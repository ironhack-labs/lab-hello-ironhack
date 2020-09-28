import React from 'react';

const Features = props => {

    const feature = {
        title: props.name,
        description: props.descriptions
    }

    return (
        <>
            <article>
                <img src={props.image} alt="Foto" />
                <p>{props.name}</p>
                <p>{props.description}</p>
            </article>
        </>
    )
}

export default Features
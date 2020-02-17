import React from 'react'

export default function component({image, title, description}) {
    return (
        <div className="component">
            <img src={image} alt="Image KO" className="component-image"></img>
            <div className="component-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

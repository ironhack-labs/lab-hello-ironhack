import React from 'react'

function ReactAssets(props) {
    return (
        <div className="column">
                <div>
                    <img src={props.src} />
                    <h2>{props.title}</h2>
                    <p className="text">{props.description}</p>
                </div>
        </div>
    )
}

export default ReactAssets

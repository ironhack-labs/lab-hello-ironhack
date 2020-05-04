import React from 'react'

function ReactAssets(props) {
    return (
        <div className="reactAssest">
            <img src={props.picture} alt=""/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default ReactAssets

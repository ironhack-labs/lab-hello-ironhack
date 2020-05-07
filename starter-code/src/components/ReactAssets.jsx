import React from 'react'

function ReactAssets(props) {
    console.log(props.description)
    return (
        <div className="reactAssest">
            <img src={props.picture} alt=""/>
            <h2>{props.title}</h2>
            {props.description}
        </div>
    )
}

export default ReactAssets

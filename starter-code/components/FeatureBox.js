import React from "react"

function FeatureBox (props) {
    return (
        <article className="col-4">
        <img src={props.pic} /> 
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        </article>
    )
}

export default FeatureBox
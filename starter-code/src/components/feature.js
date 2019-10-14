import React from "react";
import "../stylesheets/feature.scss"

function Feature(props){
    return(
        <div className="each-feature d-flex">
            <img src={props.avatar}></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Feature;
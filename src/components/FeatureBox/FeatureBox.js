import React from "react";
import "./FeatureBox.css";


const FeatureBox = (props) =>{
    return (
        <div className="featureBox">
        <img src={props.imgUrl}/>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        </div>
    )
}

export default FeatureBox
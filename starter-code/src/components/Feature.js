import React, { Component } from "react";
import "../styles/feature.css";

const Feature = props => {
    return (
        <div>
            <div>
                <img src={props.path} />
            </div>
            <div>
                <h1 className="featureTitle">{props.title}</h1>
                <p className="featureInfo">{props.info}</p>
            </div>
        </div>
    );
}

export default Feature;

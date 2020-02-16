import React from 'react';

const Feature = props => {
    return (
        <div className = "feature">
            <img src={props.path} />
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default Feature;
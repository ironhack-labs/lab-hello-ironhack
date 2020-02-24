import React from 'react';

const Footer = props => {

    return(
        <div>
            <img src={props.src}></img>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Footer
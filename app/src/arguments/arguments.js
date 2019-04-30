import React from 'react';
import "./arguments.css"


export default function pitch(props) {
    return  (
    <div className="pitch">
        <img alt="icon" src={props.image}/>
        <p>{props.txt}</p>
    </div>
    )
}

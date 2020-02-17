import React from 'react'

export default function Container(props) {
    return (
        <div className="Container">
            <img src={props.imgSrc}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

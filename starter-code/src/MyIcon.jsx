import React from 'react'


export default function MyIcon(props) {
    return (
        <div>
           <img src={props.url} />
           <h3>{props.title}</h3>
           <p>{props.paragraph}</p>
        </div>
    )
}

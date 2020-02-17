import React from 'react'
import "./styles/icones.css";

export default function IconeDiv({title, children,image}) {
    return (
        <div>
            <img src={image}/>
            <h2>{title}</h2>
            <p className="explanation">{children}</p>
        </div>
    )
}

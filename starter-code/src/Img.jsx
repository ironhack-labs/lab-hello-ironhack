import React from 'react'
import "./styles/img.css";

export default function Img(prop) {
    return (
        <div>
            <img src={prop.url} />
        </div>
    )
}

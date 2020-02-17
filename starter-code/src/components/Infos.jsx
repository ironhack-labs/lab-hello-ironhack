import React from 'react'
import "../styles/Infos.css";

export default function Infos({
    img,
    title,
    text
}) {
    return (
        <div className="infos">
            <div>
                <img src={img} alt="info-logo"></img>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    )
}

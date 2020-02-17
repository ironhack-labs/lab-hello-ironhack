import React from 'react'

export default function Cta({ src, alt, title, text }) {
    return (
        <div className="cta">
            <img src={src} alt="" />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

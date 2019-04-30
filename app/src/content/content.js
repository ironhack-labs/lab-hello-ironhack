import React from 'react';
import "./content.css"

export default function content(text) {
    return (
    <div>
        <h1>{text.title}</h1>
        <h2>{text.subtitle}</h2>
    </div>
    )
}

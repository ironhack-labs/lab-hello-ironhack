import React from 'react'

export default function TextHeader({title, children}) {
    return (
        <div>
        <h1>{title}</h1>
        <p className="title-parag">{children}</p>
        </div>
    )
}

import React from 'react'

export default function SmallItems({smallimage, title, description}) {
    return (
        <div className="small-item">
            <img src={smallimage} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
import React from 'react'

export default function Logo({image}) {
    return (
        <div className="logo">
            <img src={image} />
        </div>
    );
}
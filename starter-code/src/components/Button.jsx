import React from 'react'

export default function Button({btn}) {
    function handleClick() {}
    return (
        <div className="btn">
            <button onClick={handleClick}>{btn}</button>
        </div>
    );
}
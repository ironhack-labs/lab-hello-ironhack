import React from 'react';
import "./../styles/Button.css"

export default function Button({
    text
}) {
    return (
        <div className="btn-wrapper">
            <a className="btn" href="#">{text}</a>
        </div>
    )
}

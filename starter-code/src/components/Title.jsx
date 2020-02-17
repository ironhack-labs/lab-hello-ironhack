import React from 'react';
import "../styles/Title.css";

export default function Title({text}) {
    return (
        <div className="title">
            <h1>{text}</h1>
        </div>
    )
}

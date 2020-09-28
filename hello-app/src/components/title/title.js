import React from 'react'

import './title.css'
const Title = props => {
    return (
        <header className="mainTitle">
            <h1>{props.titleText}</h1>
            <p>{props.text}</p>
        </header>
    )
}

export default Title
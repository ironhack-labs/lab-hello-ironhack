import React from 'react'

import './Title.css'

const Title = props => {


    return (
        <header>
            <h1>{props.titleText}</h1>
            <p>{props.subtitleText}</p>
        </header>
    )
}

export default Title
import React from 'react'

const Button = props => {

    return (
        <a href={props.link}>{props.name}</a>
    )
}

export default Button
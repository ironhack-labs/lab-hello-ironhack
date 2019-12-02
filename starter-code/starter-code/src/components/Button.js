import React from 'react'
import buttonCss from './styles/Button.css'



function Button(props) {
    return (
        <button>{props.text}</button>
    )
}

export default Button
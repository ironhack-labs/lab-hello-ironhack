import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <a href={props.link}> { props.text } </a>
            
    )
}

export default Button;
